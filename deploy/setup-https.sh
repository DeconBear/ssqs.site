#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${DOMAIN:-ssqs.site}"
ALT_DOMAIN="${ALT_DOMAIN:-www.ssqs.site}"
LE_EMAIL="${LE_EMAIL:-i.love.wind.sunny@gmail.com}"

APP_PORT="${APP_PORT:-3100}"
OPENRESTY_CONF_DIR="${OPENRESTY_CONF_DIR:-/opt/1panel/www/conf.d}"
OPENRESTY_ROOT_DIR="${OPENRESTY_ROOT_DIR:-/opt/1panel/apps/openresty/openresty/root}"
OPENRESTY_SSL_DIR="${OPENRESTY_SSL_DIR:-/opt/1panel/apps/openresty/openresty/conf/ssl}"
CONF_PATH="$OPENRESTY_CONF_DIR/ssqs.conf"
WEBROOT="$OPENRESTY_ROOT_DIR"
CERT_TARGET_DIR="$OPENRESTY_SSL_DIR/$DOMAIN"
RENEW_HOOK="/etc/letsencrypt/renewal-hooks/deploy/ssqs-sync-cert.sh"

find_openresty_container() {
  docker ps --format '{{.Names}}' | grep '^1Panel-openresty' | head -n 1
}

reload_openresty() {
  local container_name

  container_name="$(find_openresty_container)"
  docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -t
  docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -s reload
}

install_http_only_config() {
  sudo tee "$CONF_PATH" > /dev/null <<EOF
server {
  listen 80;
  listen [::]:80;
  server_name ${DOMAIN} ${ALT_DOMAIN};

  client_max_body_size 32m;
  server_tokens off;

  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;

  location ^~ /.well-known/acme-challenge/ {
    root /usr/share/nginx/html;
    default_type "text/plain";
    try_files \$uri =404;
  }

  location / {
    proxy_pass http://127.0.0.1:${APP_PORT};
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 60s;
    proxy_send_timeout 60s;
  }
}
EOF
}

install_https_config() {
  sudo tee "$CONF_PATH" > /dev/null <<EOF
server {
  listen 80;
  listen [::]:80;
  server_name ${DOMAIN} ${ALT_DOMAIN};

  location ^~ /.well-known/acme-challenge/ {
    root /usr/share/nginx/html;
    default_type "text/plain";
    try_files \$uri =404;
  }

  location / {
    return 301 https://\$host\$request_uri;
  }
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name ${DOMAIN} ${ALT_DOMAIN};

  ssl_certificate /usr/local/openresty/nginx/conf/ssl/${DOMAIN}/fullchain.pem;
  ssl_certificate_key /usr/local/openresty/nginx/conf/ssl/${DOMAIN}/privkey.pem;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK:!KRB5:!SRP:!CAMELLIA:!SEED;
  ssl_prefer_server_ciphers off;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;

  client_max_body_size 32m;
  server_tokens off;

  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Strict-Transport-Security "max-age=31536000" always;

  location / {
    proxy_pass http://127.0.0.1:${APP_PORT};
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 60s;
    proxy_send_timeout 60s;
  }
}
EOF
}

sync_certificate() {
  sudo mkdir -p "$CERT_TARGET_DIR"
  sudo install -m 644 "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" "$CERT_TARGET_DIR/fullchain.pem"
  sudo install -m 600 "/etc/letsencrypt/live/$DOMAIN/privkey.pem" "$CERT_TARGET_DIR/privkey.pem"
}

install_renew_hook() {
  sudo tee "$RENEW_HOOK" > /dev/null <<EOF
#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${DOMAIN}"
SOURCE_DIR="/etc/letsencrypt/live/\$DOMAIN"
TARGET_DIR="${CERT_TARGET_DIR}"

container_name=\$(docker ps --format '{{.Names}}' | grep '^1Panel-openresty' | head -n 1)

mkdir -p "\$TARGET_DIR"
install -m 644 "\$SOURCE_DIR/fullchain.pem" "\$TARGET_DIR/fullchain.pem"
install -m 600 "\$SOURCE_DIR/privkey.pem" "\$TARGET_DIR/privkey.pem"

docker exec "\$container_name" /usr/local/openresty/nginx/sbin/nginx -t
docker exec "\$container_name" /usr/local/openresty/nginx/sbin/nginx -s reload
EOF

  sudo chmod +x "$RENEW_HOOK"
}

main() {
  if ! command -v docker >/dev/null 2>&1; then
    echo "docker is required because OpenResty is running inside 1Panel."
    exit 1
  fi

  if ! command -v certbot >/dev/null 2>&1; then
    echo "[1/6] Installing certbot..."
    sudo apt update
    sudo apt install -y certbot
  else
    echo "[1/6] certbot already installed."
  fi

  echo "[2/6] Preparing ACME challenge webroot..."
  sudo mkdir -p "$WEBROOT/.well-known/acme-challenge"

  if [ -f "$CONF_PATH" ]; then
    sudo cp "$CONF_PATH" "${CONF_PATH}.bak.$(date +%Y%m%d%H%M%S)"
  fi

  echo "[3/6] Installing temporary HTTP config for certificate issuance..."
  install_http_only_config
  reload_openresty

  echo "[4/6] Requesting Let's Encrypt certificate..."
  certbot_args=(
    certonly
    --webroot
    -w "$WEBROOT"
    -d "$DOMAIN"
    -d "$ALT_DOMAIN"
    --agree-tos
    --non-interactive
    --keep-until-expiring
  )

  if [ -n "$LE_EMAIL" ]; then
    certbot_args+=(--email "$LE_EMAIL")
  else
    certbot_args+=(--register-unsafely-without-email)
  fi

  sudo certbot "${certbot_args[@]}"

  echo "[5/6] Syncing certificate into OpenResty and enabling HTTPS..."
  sync_certificate
  install_renew_hook
  install_https_config
  reload_openresty

  echo "[6/6] Checking certbot timer..."
  sudo systemctl enable --now certbot.timer >/dev/null 2>&1 || true
  sudo systemctl --no-pager --full status certbot.timer || true

  echo
  echo "HTTPS should now be available at: https://${DOMAIN}"
}

main "$@"

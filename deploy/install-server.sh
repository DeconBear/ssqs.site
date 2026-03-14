#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="${APP_ROOT:-/var/www/ssqs/current}"
APP_PARENT="$(dirname "$APP_ROOT")"
OPENRESTY_CONF_DIR="${OPENRESTY_CONF_DIR:-/opt/1panel/www/conf.d}"

find_openresty_container() {
  if ! command -v docker >/dev/null 2>&1; then
    return 1
  fi

  docker ps --format '{{.Names}}' | grep '^1Panel-openresty' | head -n 1
}

install_reverse_proxy_config() {
  local container_name

  if [ -d "$OPENRESTY_CONF_DIR" ] && container_name="$(find_openresty_container)"; then
    echo "[6/7] Installing OpenResty config..."
    sudo cp deploy/ssqs.nginx.conf "$OPENRESTY_CONF_DIR/ssqs.conf"
    docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -t
    docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -s reload
    return 0
  fi

  echo "[6/7] Installing nginx config..."
  sudo cp deploy/ssqs.nginx.conf /etc/nginx/sites-available/ssqs
  sudo ln -sf /etc/nginx/sites-available/ssqs /etc/nginx/sites-enabled/ssqs
  sudo rm -f /etc/nginx/sites-enabled/default
  sudo nginx -t
  sudo systemctl reload nginx
}

echo "[1/7] Installing system packages..."
sudo apt update
sudo apt install -y nginx curl git unzip

if [ ! -x /usr/bin/node ] && [ ! -x /usr/local/bin/node ]; then
  echo "[2/7] Installing Node.js 22..."
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "[2/7] System Node.js already installed: $(command -v node) ($(node -v))"
fi

if [ ! -x /usr/bin/node ] && [ ! -x /usr/local/bin/node ]; then
  echo "No system-wide node binary was found after installation."
  echo "Please make sure node is available in /usr/bin or /usr/local/bin."
  exit 1
fi

echo "[3/7] Preparing application directory..."
sudo mkdir -p "$APP_PARENT"
sudo chown -R "$USER:$USER" "$APP_PARENT"

if [ ! -d "$APP_ROOT" ]; then
  echo "Application directory $APP_ROOT does not exist yet."
  echo "Upload the release package and extract it there before rerunning this script."
  exit 1
fi

echo "[4/7] Installing dependencies and building..."
cd "$APP_ROOT"
npm ci
npm run build

echo "[4.5/7] Preparing standalone static assets..."
mkdir -p .next/standalone/.next
rm -rf .next/standalone/public
rm -rf .next/standalone/.next/static
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static

echo "[5/7] Installing systemd service..."
sudo cp deploy/ssqs.service /etc/systemd/system/ssqs.service
sudo systemctl daemon-reload
sudo systemctl enable ssqs
sudo systemctl restart ssqs

install_reverse_proxy_config

echo "[7/7] Final checks..."
sudo systemctl --no-pager --full status ssqs || true
echo
echo "Site should now be reachable at: http://111.230.186.141"

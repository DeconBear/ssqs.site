#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="${APP_ROOT:-/var/www/ssqs/current}"
OPENRESTY_CONTAINER="${OPENRESTY_CONTAINER:-}"

find_openresty_container() {
  if [ -n "$OPENRESTY_CONTAINER" ]; then
    printf '%s\n' "$OPENRESTY_CONTAINER"
    return 0
  fi

  if ! command -v docker >/dev/null 2>&1; then
    return 1
  fi

  docker ps --format '{{.Names}}' | grep '^1Panel-openresty' | head -n 1
}

reload_reverse_proxy() {
  local container_name

  if container_name="$(find_openresty_container)"; then
    echo "[3/4] Checking OpenResty config in $container_name..."
    docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -t
    docker exec "$container_name" /usr/local/openresty/nginx/sbin/nginx -s reload
    return 0
  fi

  echo "[3/4] Checking nginx..."
  sudo nginx -t
  sudo systemctl reload nginx
}

echo "[1/4] Updating application..."
cd "$APP_ROOT"
rm -rf .next
npm ci
npm run build

echo "[1.5/4] Refreshing standalone static assets..."
mkdir -p .next/standalone/.next
rm -rf .next/standalone/public
rm -rf .next/standalone/.next/static
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static

echo "[2/4] Restarting service..."
sudo systemctl restart ssqs

reload_reverse_proxy

echo "[4/4] Service status..."
sudo systemctl --no-pager --full status ssqs || true

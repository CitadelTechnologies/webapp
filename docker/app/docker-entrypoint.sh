#!/bin/bash
if [ ! -d "/srv/app/node_modules" ]; then
  npm --prefix /srv/app install
fi

exec "$@"

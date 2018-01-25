#!/bin/bash
if [ ! -d "/srv/app/node_modules" ]; then
  npm --prefix /srv/app install
fi

if [ "$NODE_ENV" = "production" ]; then
  next build src/client
fi

exec "$@"

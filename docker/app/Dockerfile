FROM node:latest
MAINTAINER Kern <kern046@gmail.com>

COPY docker-entrypoint.sh /entrypoint.sh
COPY pm2_configuration.yml /pm2_configuration.yml

RUN \
  npm -g install pm2 artillery knex \
  && chmod a+x /entrypoint.sh && chown root:root /entrypoint.sh


ENTRYPOINT ["/entrypoint.sh"]

CMD ["pm2-docker", "/pm2_configuration.yml"]

FROM node:latest
MAINTAINER Kern <kern046@gmail.com>

COPY docker-entrypoint.sh /entrypoint.sh
COPY pm2_configuration.yml /pm2_configuration.yml

RUN \
  npm -g install pm2 artillery knex next react react-dom babel-runtime \
  && chmod a+x /entrypoint.sh && chown root:root /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80

CMD pm2-docker /pm2_configuration.yml

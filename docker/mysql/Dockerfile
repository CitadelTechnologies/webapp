FROM mysql:5.7
MAINTAINER Axel Venet <axel.venet@fr.airtag.com>

COPY conf.d/*.cnf /etc/mysql/conf.d/
COPY docker-entrypoint-initdb.d/databases.sh /docker-entrypoint-initdb.d/databases.sh

RUN chmod 644 /etc/mysql/conf.d/*.cnf \
    && chmod a+x /docker-entrypoint-initdb.d/databases.sh && chown root:root /docker-entrypoint-initdb.d/databases.sh \
    && apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y dos2unix \
    && dos2unix /docker-entrypoint-initdb.d/databases.sh \
    && apt-get --purge remove -y dos2unix \
    && rm -rf /var/lib/apt/lists/*

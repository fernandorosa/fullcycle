FROM mysql:5.7

ENV MYSQL_DATABASE nodedb
ENV MYSQL_ROOT_PASSWORD=root

COPY ./CreateDatabase.sql /docker-entrypoint-initdb.d/
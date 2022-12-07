FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN chmod -777 wait-for-it.sh && chmod -777 docker-deploy.sh && npm install --silent

EXPOSE 3000

ENTRYPOINT [ "./docker-deploy.sh" ]
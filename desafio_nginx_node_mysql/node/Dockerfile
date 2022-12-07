FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN chmod +x ./wait-for-it.sh && chmod +x ./docker-deploy.sh
RUN npm install --silent

EXPOSE 3000

ENTRYPOINT [ "./docker-deploy.sh" ]
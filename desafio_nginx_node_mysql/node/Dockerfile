FROM node:15-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --silent

EXPOSE 3000

CMD ["node", "index.js"]
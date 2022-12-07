FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN chmod +x ./wait-for-it.sh
RUN npm install --silent

EXPOSE 3000

CMD ["node", "index.js"]
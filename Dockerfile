FROM node:10

RUN npm install -g pm2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 4040

CMD ["pm2-runtime", "server.js"]
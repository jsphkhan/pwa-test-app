FROM node:10

# This is needed for Brotli compression to work
RUN npm install -g node-gyp

RUN npm install -g pm2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 4040

CMD ["pm2-runtime", "server.js"]
FROM node:22.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV SERVER_PORT=3000
EXPOSE 3000
CMD [ "npm", "run", "start" ]

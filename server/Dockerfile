FROM node:22.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV SERVER_PORT=5000
EXPOSE 5000
CMD [ "npm", "run", "start" ]

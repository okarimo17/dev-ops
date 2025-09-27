FROM node:22.16.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# RUN npm build

EXPOSE 5173
CMD [ "npm" , "run", "dev" ]
FROM node:22.16.0-alpine AS builder
WORKDIR /app

# Define a build argument for the backend host
ARG BACKEND_URL


COPY package*.json ./
RUN npm install
COPY . .

ENV VITE_BACKEND_URL=$BACKEND_URL

RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
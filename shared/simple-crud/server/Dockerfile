FROM node:22.16.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma/
RUN npx prisma generate
COPY . .
# ENV SERVER_PORT=3000
# EXPOSE 3000
# CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]

# Production image
FROM node:22.16.0-alpine
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY . .
ENV SERVER_PORT=3000
EXPOSE 3000
# CMD [ "npm", "run", "start" ] npx prisma migrate deploy &&
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
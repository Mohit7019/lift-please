FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY src ./src
COPY tests ./tests

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/server.js"]

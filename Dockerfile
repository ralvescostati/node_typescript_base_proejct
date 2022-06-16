FROM node:16.14.2-alpine

LABEL org.opencontainers.image.source="https://github.com/ralvescostati/node_typescript_base_proejct"

WORKDIR /app
COPY package*.json .env.* ./
RUN npm ci --only=production --ignore-scripts
COPY . ./

CMD ["node", "dist/main.js"]
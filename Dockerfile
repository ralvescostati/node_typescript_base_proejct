FROM node:16.14.2-alpine

LABEL org.opencontainers.image.source="https://github.com/ralvescostati/node_typescript_base_proejct"

WORKDIR /app
COPY package*.json .env.* ./
RUN npm ci --only=production --ignore-scripts
COPY . ./

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY
ENV NEW_RELIC_APP_NAME="newrelic-app"
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

USER node

CMD ["node", "dist/main.js"]
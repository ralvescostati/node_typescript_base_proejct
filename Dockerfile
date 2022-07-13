FROM node:16.14.2-alpine as build

WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.14.2-alpine

LABEL org.opencontainers.image.source="https://github.com/ralvescostati/node_typescript_base_proejct"

WORKDIR /app
COPY package*.json .env.* ./
RUN npm ci --only=production --ignore-scripts
COPY --from=build /build/dist ./

USER node

EXPOSE 3333

CMD ["node", "main.js"]
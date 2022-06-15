FROM node:16.14.2-alpine AS build

WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.14.2-alpine

WORKDIR /api
COPY package*.json .env.* .sequelizerc ./
RUN npm install --only=prod
COPY --from=build /build/dist ./

CMD ["node", "main.js"]
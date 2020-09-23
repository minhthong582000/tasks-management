FROM node:13-alpine AS build
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:13-alpine AS production
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install
COPY . .
COPY --from=build /usr/src/app/dist ./dist
CMD ["npm", "run", "start:prod"]
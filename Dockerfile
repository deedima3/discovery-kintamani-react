FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json .
RUN npm install -g pnpm
RUN pnpm install
COPY . .

RUN pnpm run build

EXPOSE 3000
ENV NODE_ENV=production
CMD ["pnpm", "start"]
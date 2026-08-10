FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

COPY . .
RUN yarn docs:build

FROM nginxinc/nginx-unprivileged:1.28-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.vitepress/dist/ /usr/share/nginx/html/nerchat/

EXPOSE 8080

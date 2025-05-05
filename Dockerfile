FROM oven/bun:1.2-alpine AS build

WORKDIR /opt/build

COPY ./package.json ./bun.lock ./
RUN bun install --filter '!strapi'

COPY postcss.config.js svelte.config.js tailwind.config.ts tsconfig.json vite.config.ts ./
COPY ./src ./src
COPY ./static ./static
RUN bun run build

RUN rm -rf ./node_modules/ && bun install --filter '!strapi' --production

FROM node:18-alpine3.21

WORKDIR /opt/app

COPY ./package.json ./bun.lock ./
COPY --from=build --chown=1000:1000 /opt/build/node_modules/ /opt/app/node_modules/
COPY --from=build --chown=1000:1000 /opt/build/build /opt/app

ENTRYPOINT [ "node", "index.js" ]

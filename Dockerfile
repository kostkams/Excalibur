FROM node:8.10 AS base

RUN mkdir -p /opt/excalibur/
WORKDIR /opt/excalibur/

FROM base AS npm
COPY package.json yarn.lock ./

FROM npm AS install
RUN yarn install --frozen-lockfile --cache-folder /temp/yarn

FROM install AS src
COPY . .
ENTRYPOINT ["yarn", "run"]

FROM src AS build
RUN yarn run build

FROM npm AS prod
COPY --from=install /temp/yarn /temp/yarn
RUN yarn install --production --frozen-lockfile --cache-folder /temp/yarn
COPY --from=build /opt/excalibur/dist ./dist
COPY . .
ENTRYPOINT ["yarn", "run"]
CMD ["prod"]
EXPOSE 3000

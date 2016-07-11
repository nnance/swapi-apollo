FROM alpine

RUN apk add --update --no-cache nodejs tini
WORKDIR /app
COPY . /app

RUN npm --unsafe-perm install && npm cache clear

EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "start"]

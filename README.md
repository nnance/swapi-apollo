# SWAPI Apollo Server Wrapper

A wrapper around [SWAPI](http://swapi.co) built using Apollo Server.  This is intended to be a POC of an express and HAPI GraphQL server.

Uses:

* [apollo-server-express](https://github.com/apollographql/apollo-server) - Apollo server GraphQL middleware for express.
* [apollo-server-hapi](https://github.com/apollographql/apollo-server) - Apollo server GraphQL plugin for Hapi.
* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [DataLoader](https://github.com/facebook/dataloader) - for coalescing and caching fetches.
* [GraphiQL](https://github.com/graphql/graphiql) - for easy exploration of this GraphQL server.

## Getting Started

Install dependencies with

```sh
npm install
```

## Local Server

A local server is in `./src`. It can be run with:

```sh
npm start
```

This is will start both an express server on port 3000 and a HAPI server on port 8000.

You can explore the API at http://localhost:3000 or http://localhost:8000

## Development Server

A development server that watches for changes can be ran with:

```sh
npm run dev
```

## Distributed Tracing Options

Enable Zipkin console tracing

```sh
ZIPKIN=enabled npm start
```

Publish Zipkin traces to Zipkin server

```sh
docker run -d -p 9411:9411 openzipkin/zipkin
ZIPKIN_HOST=http://localhost:9411 npm start
```

You can then navigate to `http://localhost:9411` to access the Zipkin UI

Publish Zipkin traces to Jaeger server

```sh
docker run -d -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \
  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 jaegertracing/all-in-one:latest
ZIPKIN_HOST=http://localhost:9411 npm start
```

You can then navigate to `http://localhost:16686` to access the Jaeger UI

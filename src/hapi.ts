import * as hapi from 'hapi'
import {graphiqlHapi, graphqlHapi} from 'apollo-server-hapi'

const hapiPort = process.env.HAPI_PORT || 8000

const {Tracer, ExplicitContext, ConsoleRecorder} = require('zipkin')
const zipkinMiddleware = require('zipkin-instrumentation-hapi').hapiMiddleware

const ctxImpl = new ExplicitContext()
const recorder = new ConsoleRecorder()

const localServiceName = 'swapi-apollo' // name of this application
const tracer = new Tracer({ctxImpl, recorder, localServiceName})


export function startHapi(graphqlOptions) {
    const server = new hapi.Server()

    server.connection({
        host: 'localhost',
        port: hapiPort,
    })

    // Add the Zipkin middleware
    server.register({
        register: zipkinMiddleware,
        options: {tracer},
    })

    server.register({
        options: {
            graphqlOptions: graphqlOptions,
            path: '/graphql',
        },
        register: graphqlHapi,
    })

    server.register({
        options: {
            graphiqlOptions: {
                endpointURL: '/graphql',
            },
            path: '/',
        },
        register: graphiqlHapi,
    })

    server.start(() => {
      console.log(`HAPI server is listen on ${hapiPort}`)
      console.log(`open browser to http://localhost:${hapiPort}`)
    })
  }

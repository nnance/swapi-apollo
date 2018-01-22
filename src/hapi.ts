import * as hapi from 'hapi'
import {graphiqlHapi, graphqlHapi} from 'apollo-server-hapi'

const hapiPort = process.env.HAPI_PORT || 8000

export function startHapi(graphqlOptions) {
    const server = new hapi.Server()

    server.connection({
        host: 'localhost',
        port: hapiPort,
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

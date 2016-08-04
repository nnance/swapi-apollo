import * as hapi from 'hapi'
import * as apollo from 'apollo-server'

const hapiPort = process.env.HAPI_PORT || 8000

export function startHapi(graphqlOptions) {
  const server = new hapi.Server()

  server.connection({
      host: 'localhost',
      port: hapiPort,
  })

  server.register({
    register: new apollo.ApolloHAPI(),
    options: graphqlOptions,
    routes: { prefix: '/graphql' },
  })

  server.register({
      register: new apollo.GraphiQLHAPI(),
      options: { endpointURL: '/graphql' },
  })

  server.start(() => {
    console.log(`HAPI server is listen on ${hapiPort}`)
  })
}

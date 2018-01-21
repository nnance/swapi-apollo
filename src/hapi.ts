import * as hapi from 'hapi'
import * as apollo from 'graphql-server-hapi'

const hapiPort = process.env.HAPI_PORT || 8000

export async function startHapi(graphqlOptions) {
  const server = new hapi.Server({
      host: 'localhost',
      port: hapiPort,
  })

  await server.register({
      options: {
          graphqlOptions,
          path: '/graphql',
      },
      plugin: apollo.graphqlHapi,
  })

  await server.register({
      options: {
          graphiqlOptions: {
              endpointURL: '/graphql',
          },
          path: '/',
      },
      plugin: apollo.graphiqlHapi,
  })

  await server.register({
    plugin: require('good'),
    options: {
        includes: {
            response: [ 'payload' ],
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ log: '*', response: '*' }],
            }, {
                module: 'good-console',
            }, 'stdout'],
        },
    },
  })

  await server.start()
  console.log(`HAPI server is listen on ${hapiPort}`)
  console.log(`open browser to http://localhost:${hapiPort}`)
}

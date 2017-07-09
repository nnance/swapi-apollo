import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as apollo from 'graphql-server-express'


const expressPort = process.env.EXPRESS_PORT || 3000
const app = express()

export function startExpress(graphqlOptions) {
  app.use(bodyParser.json())
  app.use('/graphql', apollo.graphqlExpress(graphqlOptions))
  app.use('/', apollo.graphiqlExpress({endpointURL: '/graphql'}))

  app.listen(expressPort, () => {
      console.log(`Express server is listen on ${expressPort}`)
  })
}

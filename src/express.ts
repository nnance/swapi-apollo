import * as express from 'express'
import * as bodyParser from 'body-parser'
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'


const expressPort = process.env.EXPRESS_PORT || 3000
const app = express()

export function startExpress(graphqlOptions) {
  app.use(bodyParser.json())
  app.use('/graphql', graphqlExpress(graphqlOptions))
  app.use('/', graphiqlExpress({endpointURL: '/graphql'}))

  app.listen(expressPort, () => {
      console.log(`Express server is listen on ${expressPort}`)
  })
}

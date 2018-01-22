import * as express from 'express'
import * as bodyParser from 'body-parser'
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'
import {tracer} from './observability/zipkin'

const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware

const expressPort = process.env.EXPRESS_PORT || 3000
const app = express()

export function startExpress(graphqlOptions) {
  // Add the Zipkin middleware
  if (process.env.ZIPKIN || process.env.ZIPKIN_HOST) {
    app.use(zipkinMiddleware({tracer}))
  }

  app.use(bodyParser.json())
  app.use('/graphql', graphqlExpress(graphqlOptions))
  app.use('/', graphiqlExpress({endpointURL: '/graphql'}))

  app.listen(expressPort, () => {
      console.log(`Express server is listen on ${expressPort}`)
  })
}

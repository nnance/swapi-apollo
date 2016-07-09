import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, apolloExpress } from 'apollo-server'

import schema from './schema'
import SWAPIConnector from './connector'
import FilmModel from './models/film'

const port = 3000
const endpointURL = '/grahpql'
const app = express()

const swapiConnector = new SWAPIConnector('http://swapi.co/api/')
const context = {
  film: new FilmModel(swapiConnector),
}

app.use(bodyParser.json())
app.get('/', graphiqlExpress({endpointURL}))
app.post(endpointURL, apolloExpress({schema, context}))

app.listen(port, () => {
    console.log(`Server is listen on ${port}`)
})

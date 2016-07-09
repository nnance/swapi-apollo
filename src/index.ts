import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, apolloExpress } from 'apollo-server'

import schema from './schema'

const port = 3000
const endpointURL = '/grahpql'
const app = express()

app.use(bodyParser.json())
app.get('/', graphiqlExpress({endpointURL}))
app.post(endpointURL, apolloExpress({schema}))

app.listen(port, () => {
    console.log(`Server is listen on ${port}`)
})

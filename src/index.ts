import * as graphql from 'graphql'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, apolloExpress } from 'apollo-server'

const port = 3000
const endpointURL = '/grahpql'
const app = express()

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            testString: { type: graphql.GraphQLString },
        },
    }),
})

app.use(bodyParser.json())
app.get('/', graphiqlExpress({endpointURL}))
app.post(endpointURL, apolloExpress({schema}))

app.listen(port, () => {
    console.log(`Server is listen on ${port}`)
})

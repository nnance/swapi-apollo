import { GraphQLSchema, DocumentNode } from 'graphql'
import { startExpress } from './express'
import { startHapi } from './hapi'
import { getFetcher, getLoader } from './connectors/swapi'
import { executableSchemaFromModules } from '@creditkarma/graphql-loader'
import modules from './modules'

const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'

const fetcher = getFetcher(apiHost)

const graphqlOptions = (schema: GraphQLSchema) => () => ({
    pretty: true,
    schema,
    context: {
        loader: getLoader(fetcher),
    },
})

executableSchemaFromModules(modules(apiHost)).then(schema => {
    const options = graphqlOptions(schema)
    startExpress(options)
    startHapi(options)
}).catch(e => {
    console.error(e)
})


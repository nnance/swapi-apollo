import { loadSchema } from '@creditkarma/graphql-loader'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import resolvers from './resolvers/index'
import { getFetcher, getLoader, getPageFetcher } from './connectors/swapi'
import { startExpress } from './express'
import { startHapi } from './hapi'

const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'https://swapi.co/api'

const graphqlOptions = (schema: GraphQLSchema) => (request) => {
    const fetcher = getFetcher(apiHost, request.plugins.zipkin)
    return {
        pretty: true,
        schema,
        context: {
            loader: getLoader(fetcher),
            pageFetcher: getPageFetcher(fetcher),
        },
    }
}

loadSchema('./schema/*.gql')
    .then(schema => {
        addResolveFunctionsToSchema(schema, resolvers)
        startExpress(graphqlOptions(schema))
        startHapi(graphqlOptions(schema))
    })

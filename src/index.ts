import { loadSchema } from '@creditkarma/graphql-loader'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher, getLoader, getPageFetcher } from './connectors/swapi'
import { startExpress } from './express'
import { startHapi } from './hapi'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'https://swapi.co/api'

const fetcher = getFetcher(apiHost)

const graphqlOptions = (schema: GraphQLSchema) => (request) => ({
    pretty: true,
    schema,
    context: {
        loader: getLoader(fetcher(request.plugins.zipkin)),
        pageFetcher: getPageFetcher(fetcher(request.plugins.zipkin)),
        fetcher: fetcher(request.plugins.zipkin),
    },
})

loadSchema('./schema/*.gql')
    .then(schema => {
        const resolvers = getResolversWithFetchers()

        addResolveFunctionsToSchema(schema, resolvers)
        startExpress(graphqlOptions(schema))
        startHapi(graphqlOptions(schema))
    })

import { loadSchema } from '@creditkarma/graphql-loader'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher, getLoader } from './connectors/swapi'
import { startExpress } from './express'
import { startHapi } from './hapi'

const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'

const fetcher = getFetcher(apiHost)

const graphqlOptions = (schema: GraphQLSchema) =>
    () => ({
        pretty: true,
        tracing: true,
        cacheControl: true,
        schema,
        context: {
            loader: getLoader(fetcher),
        },
    })

const main = async () => {
    const schema = await loadSchema('./schema/*.gql')
    const resolvers = getResolversWithFetchers(fetcher)
    addResolveFunctionsToSchema(schema, resolvers)
    startExpress(graphqlOptions(schema))
    startHapi(graphqlOptions(schema))
}

main()

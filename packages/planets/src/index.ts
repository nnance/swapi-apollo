import { loadSchema } from '@creditkarma/graphql-loader'
import { GraphQLSchema } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import getResolversWithFetchers from './resolvers'
import { getFetcher, getLoader } from './connectors/swapi'

export interface IPlanetOptions {
    apiHost: string
}

export default (options: IPlanetOptions): Promise<GraphQLSchema> => {
    return loadSchema('./schema/*.gql')
        .then(schema => {
            const fetcher = getFetcher(options.apiHost)
            const resolvers = getResolversWithFetchers(fetcher)
            addResolveFunctionsToSchema(schema, resolvers)
            return schema
        })
}

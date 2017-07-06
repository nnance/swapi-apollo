import { loadSchema } from '@creditkarma/graphql-loader'
import { GraphQLSchema } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import getResolversWithFetchers from './resolvers'
import { getFetcher, getLoader, IFetcher } from './connectors/swapi'

export default (fetcher: IFetcher): Promise<GraphQLSchema> => {
    return loadSchema('./schema/*.gql')
        .then(schema => {
            const resolvers = getResolversWithFetchers(fetcher)
            addResolveFunctionsToSchema(schema, resolvers)
            return schema
        })
}

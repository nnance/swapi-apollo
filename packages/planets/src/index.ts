import { loadSchema } from '@creditkarma/graphql-loader'
import { GraphQLSchema } from 'graphql'
import getResolversWithFetchers from './resolvers'
import { getFetcher, getLoader } from './connectors/swapi'

export interface IPlanetOptions {
    apiHost: string
}

export interface IRegister {
    schema: GraphQLSchema
    resolvers: any
}

export default (options: IPlanetOptions): Promise<IRegister> => {
    return loadSchema('./schema/*.gql')
        .then(schema => {
            const fetcher = getFetcher(options.apiHost)
            const resolvers = getResolversWithFetchers(fetcher)
            return { schema, resolvers }
        })
}

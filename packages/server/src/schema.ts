import { IGraphQLModule } from './registration'
import { loadDocument } from '@creditkarma/graphql-loader'
import { resolve } from 'path'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher } from './connectors/swapi'

export default async ({ apiHost }): Promise<IGraphQLModule> => ({
    document: await loadDocument(resolve(__dirname, '..') + '/graphql/*.gql'),
    resolvers: getResolversWithFetchers(getFetcher(apiHost)),
})

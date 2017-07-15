import { loadDocument, IGraphQLModule } from '@creditkarma/graphql-loader'
import { resolve } from 'path'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher } from './connectors/swapi'

export default ({ apiHost }) => async (): Promise<IGraphQLModule> => ({
    document: await loadDocument(resolve(__dirname, '..') + '/graphql/*.gql'),
    resolvers: getResolversWithFetchers(getFetcher(apiHost)),
})

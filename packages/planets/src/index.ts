import * as path from 'path'
import { loadDocument, combineDocuments, IGraphQLModule } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import graphqlTypes from 'swapi-apollo-types'
import getResolversWithFetchers from './resolvers'
import { getFetcher, IFetcher } from './connectors/swapi'

export const getSchema = async (fetcher: IFetcher): Promise<GraphQLSchema> => {
    const gqlModule = await getGraphQLModule(fetcher)()
    const typesDoc = await graphqlTypes()
    const schema = combineDocuments([typesDoc.document, gqlModule.document])
    addResolveFunctionsToSchema(schema, gqlModule.resolvers)
    return schema
}

export const getGraphQLModule = (fetcher: IFetcher) => async (): Promise<IGraphQLModule> => {
    const document = await loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql')
    const resolvers = getResolversWithFetchers(fetcher)
    return { document, resolvers }
}

export default ({ host }) => getGraphQLModule(getFetcher(host))

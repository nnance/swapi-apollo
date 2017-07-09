import * as path from 'path'
import { loadDocument, combineDocuments } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import graphqlTypes from 'swapi-apollo-types'
import getResolversWithFetchers from './resolvers'
import { getFetcher, IFetcher } from './connectors/swapi'

export interface IGraphQLModule {
    document: DocumentNode,
    resolvers: any
}

export const getSchema = async (fetcher: IFetcher): Promise<GraphQLSchema> => {
    const gqlModule = await getGraphQLModule(fetcher)
    const typesDoc = await graphqlTypes()
    const schema = combineDocuments([typesDoc, gqlModule.document])
    addResolveFunctionsToSchema(schema, gqlModule.resolvers)
    return schema
}

export const getGraphQLModule = async (fetcher: IFetcher): Promise<IGraphQLModule> => {
    const document = await loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql')
    const resolvers = getResolversWithFetchers(fetcher)
    return { document, resolvers }
}

export default (host: string) => getGraphQLModule(getFetcher(host))

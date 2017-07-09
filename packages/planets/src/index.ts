import * as path from 'path'
import { loadDocument, combineDocuments } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import graphqlTypes from 'swapi-apollo-types'
import getResolversWithFetchers from './resolvers'
import { getFetcher, getLoader, IFetcher } from './connectors/swapi'

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

export const getGraphQLModule = (fetcher: IFetcher): Promise<IGraphQLModule> => {
    return loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql')
        .then(document => ({
            document: document,
            resolvers: getResolversWithFetchers(fetcher),
        }))
}

export default getGraphQLModule

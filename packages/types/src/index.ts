import * as path from 'path'
import { loadDocument } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'

export interface IGraphQLModule {
    document: DocumentNode,
    resolvers: any
}

export default async (): Promise<IGraphQLModule> => ({
    document: await loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql'),
    resolvers: {},
})

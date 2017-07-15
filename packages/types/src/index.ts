import * as path from 'path'
import { loadDocument, IGraphQLModule } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'

export default async (): Promise<IGraphQLModule> => ({
    document: await loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql'),
})

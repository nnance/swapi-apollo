import * as path from 'path'
import { loadDocument } from '@creditkarma/graphql-loader'
import { GraphQLSchema, DocumentNode } from 'graphql'

export default (): Promise<DocumentNode> =>
    loadDocument(path.resolve(__dirname, '..') + '/graphql/*.gql')

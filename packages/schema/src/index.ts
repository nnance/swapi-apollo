import * as path from 'path'
import { loadSchema } from '@creditkarma/graphql-loader'
import { GraphQLSchema } from 'graphql'

export default (): Promise<GraphQLSchema> =>
    loadSchema(path.resolve(__dirname, '..') + '/schema/*.gql')

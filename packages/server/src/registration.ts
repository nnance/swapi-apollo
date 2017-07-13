import { combineDocuments } from '@creditkarma/graphql-loader'
import * as deepmerge from 'deepmerge'
import { GraphQLSchema, DocumentNode } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'

export interface IGraphQLModule {
    document: DocumentNode,
    resolvers: any
}

export interface IRegisterFunc {
    (options: object): Promise<IGraphQLModule>
}

export interface IRegisterConfig {
    module: IRegisterFunc
    options: object
}

export default async (registrations: Array<IRegisterConfig>): Promise<GraphQLSchema> => {
    const registrationsPromises = registrations.map(reg => reg.module(reg.options))
    const modules = await Promise.all(registrationsPromises)
    const schema = combineDocuments(modules.map(mod => mod.document))
    const resolvers = modules.reduce((prev, curr) => deepmerge(prev, curr.resolvers), {})
    addResolveFunctionsToSchema(schema, resolvers)
    return schema
}

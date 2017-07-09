import { resolve } from 'path'
import * as deepmerge from 'deepmerge'
import { loadSchema, loadDocument, combineDocuments } from '@creditkarma/graphql-loader'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import typesModule from 'swapi-apollo-types'
import planetsModule from 'swapi-apollo-planets'
import { GraphQLSchema } from 'graphql'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher, getLoader, IFetcher } from './connectors/swapi'
import { startExpress } from './express'
import { startHapi } from './hapi'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'

const fetcher = getFetcher(apiHost)

interface IRegisterFunc {
    (options: IFetcher): Promise<GraphQLSchema>
}

const register = (registrations: [IRegisterFunc]): Promise<GraphQLSchema[]> => {
    const registrationsPromises = registrations.map(mod => mod(fetcher))
    return Promise.all(registrationsPromises)
}

const loadDocuments = async (): Promise<GraphQLSchema> => {
    const doc = await loadDocument(resolve(__dirname, '..') + '/graphql/*.gql')
    const typesDoc = await typesModule()
    const planets = await planetsModule(fetcher)
    return combineDocuments([typesDoc, planets.document, doc])
}

const loadSchemas = async (loader): Promise<GraphQLSchema> => {
    const planets = await planetsModule(fetcher)
    const schema = await loader()
    const resolvers = deepmerge(getResolversWithFetchers(fetcher), planets.resolvers)
    addResolveFunctionsToSchema(schema, resolvers)
    return schema
}

const graphqlOptions = (schema: GraphQLSchema) => {
    return () => ({
        pretty: true,
        schema,
        context: {
            loader: getLoader(fetcher),
        },
    })
}

loadSchemas(loadDocuments).then(schema => {
    startExpress(graphqlOptions(schema))
    startHapi(graphqlOptions(schema))
}).catch(e => {
    console.error(e)
})


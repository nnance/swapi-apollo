const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import getResolvers from './resolvers/index'
import { getFetch, getLoader } from './connectors/swapi'
import { startExpress } from './express'
import { startHapi } from './hapi'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'

const fetcher = getFetch(apiHost)
const schema = gqlTools.makeExecutableSchema({ typeDefs, resolvers: getResolvers(fetcher) })

const graphqlOptions = () => ({
    pretty: true,
    schema,
    context: {
        loader: getLoader(fetcher),
    },
})

startExpress(graphqlOptions)
startHapi(graphqlOptions)

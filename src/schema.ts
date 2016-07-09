const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import resolvers from './resolvers/index'

export default gqlTools.makeExecutableSchema({
  typeDefs,
  resolvers,
})

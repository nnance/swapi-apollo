const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import getResolvers from './resolvers/index'
import SWAPIConnector from './connectors/swapi'
import { getFetch, getLoader } from './connectors/swapi'
import FilmModel from './models/film'
import PeopleModel from './models/people'
import VehicleModel from './models/vehicle'
import PlanetModel from './models/planet'
import StarshipModel from './models/starship'
import SpeciesModel from './models/species'
import { startExpress } from './express'
import { startHapi } from './hapi'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'

const fetcher = getFetch(apiHost)
const schema = gqlTools.makeExecutableSchema({ typeDefs, resolvers: getResolvers(fetcher) })

function graphqlOptions() {
  const swapiConnector = new SWAPIConnector(apiHost)

  return {
      pretty: true,
      schema,
      context: {
          connector: swapiConnector,
          loader: getLoader(fetcher),
          vehicle: new VehicleModel(swapiConnector),
          people: new PeopleModel(swapiConnector),
          planet: new PlanetModel(swapiConnector),
          starship: new StarshipModel(swapiConnector),
          species: new SpeciesModel(swapiConnector),
      },
  }
}

startExpress(graphqlOptions)
startHapi(graphqlOptions)

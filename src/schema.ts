const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import resolvers from './resolvers/index'

// export default gqlTools.generateSchema(schema, resolvers)
export default gqlTools.makeExecutableSchema({
  typeDefs,
  resolvers: {
    RootQuery: {
      allFilms: () => [],
      film: () => ({}),
      allPeople: () => [],
      person: () => ({}),
      allPlanets: () => [],
      planet: () => ({}),
      allSpecies: () => [],
      species: () => ({}),
      allStarships: () => [],
      starship: () => ({}),
      allVehicles: () => [],
      vehicle: () => ({}),
      node: () => ({}),
    },
    FilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    FilmsEdge: {
      node: () => ({}),
    },
    Film: {
      speciesConnection: () => ({}),
      starshipConnection: () => ({}),
      vehicleConnection: () => ({}),
      characterConnection: () => ({}),
      planetConnection: () => ({}),
    },
    FilmSpeciesConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      species: () => [],
    },
    FilmSpeciesEdge: {
      node: () => ({}),
    },
    Species: {
      homeworld: () => ({}),
      personConnection: () => ({}),
      filmConnection: () => ({}),
    },
    Planet: {
      residentConnection: () => ({}),
      filmConnection: () => ({}),
    },
    PlanetResidentsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      residents: () => [],
    },
    PlanetResidentsEdge: {
      node: () => ({}),
    },
    Person: {
      homeworld: () => ({}),
      filmConnection: () => ({}),
      species: () => ({}),
      starshipConnection: () => ({}),
      vehicleConnection: () => ({}),
    },
    PersonFilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    PersonFilmsEdge: {
      node: () => ({}),
    },
    PersonStarshipsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      starships: () => [],
    },
    PersonStarshipsEdge: {
      node: () => ({}),
    },
    Starship: {
      pilotConnection: () => ({}),
      filmConnection: () => ({}),
    },
    StarshipPilotsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      pilots: () => [],
    },
    StarshipPilotsEdge: {
      node: () => ({}),
    },
    StarshipFilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    StarshipFilmsEdge: {
      node: () => ({}),
    },
    PersonVehiclesConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      vehicles: () => [],
    },
    PersonVehiclesEdge: {
      node: () => ({}),
    },
    Vehicle: {
      pilotConnection: () => ({}),
      filmConnection: () => ({}),
    },
    VehiclePilotsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      pilots: () => [],
    },
    VehiclePilotsEdge: {
      node: () => ({}),
    },
    VehicleFilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    VehicleFilmsEdge: {
      node: () => ({}),
    },
    PlanetFilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    PlanetFilmsEdge: {
      node: () => ({}),
    },
    SpeciesPeopleConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      people: () => [],
    },
    SpeciesPeopleEdge: {
      node: () => ({}),
    },
    SpeciesFilmsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => [],
    },
    SpeciesFilmsEdge: {
      node: () => ({}),
    },
    FilmStarshipsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      starships: () => [],
    },
    FilmStarshipsEdge: {
      node: () => ({}),
    },
    FilmVehiclesConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      vehicles: () => [],
    },
    FilmVehiclesEdge: {
      node: () => ({}),
    },
    FilmCharactersConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      characters: () => [],
    },
    FilmCharactersEdge: {
      node: () => ({}),
    },
    FilmPlanetsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      planets: () => [],
    },
    FilmPlanetsEdge: {
      node: () => ({}),
    },
    PeopleConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      people: () => [],
    },
    PeopleEdge: {
      node: () => ({}),
    },
    PlanetsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      planets: () => [],
    },
    PlanetsEdge: {
      node: () => ({}),
    },
    SpeciesConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      species: () => [],
    },
    SpeciesEdge: {
      node: () => ({}),
    },
    StarshipsConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      starships: () => [],
    },
    StarshipsEdge: {
      node: () => ({}),
    },
    VehiclesConnection: {
      pageInfo: () => ({}),
      edges: () => [],
      vehicles: () => [],
    },
    VehiclesEdge: {
      node: () => ({}),
    },
  },
})

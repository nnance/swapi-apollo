export default {
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
  PersonVehiclesConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    vehicles: () => [],
  },
  PersonVehiclesEdge: {
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
}

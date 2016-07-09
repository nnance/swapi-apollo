export default `

type Planet implements Node {
  name: String
  diameter: Int
  rotationPeriod: Int
  orbitalPeriod: Int
  gravity: String
  population: Int
  climates: [String]
  terrains: [String]
  surfaceWater: Float
  residentConnection(after: String, first: Int, before: String, last: Int): PlanetResidentsConnection
  filmConnection(after: String, first: Int, before: String, last: Int): PlanetFilmsConnection
  created: String
  edited: String
  id: ID!
}

type PlanetFilmsConnection {
  pageInfo: PageInfo!
  edges: [PlanetFilmsEdge]
  totalCount: Int
  films: [Film]
}

type PlanetFilmsEdge {
  node: Film
  cursor: String!
}

type PlanetResidentsConnection {
  pageInfo: PageInfo!
  edges: [PlanetResidentsEdge]
  totalCount: Int
  residents: [Person]
}

type PlanetResidentsEdge {
  node: Person
  cursor: String!
}

type PlanetsConnection {
  pageInfo: PageInfo!
  edges: [PlanetsEdge]
  totalCount: Int
  planets: [Planet]
}

type PlanetsEdge {
  node: Planet
  cursor: String!
}

`

export default `

type Starship implements Node {
  name: String
  model: String
  starshipClass: String
  manufacturers: [String]
  costInCredits: Float
  length: Float
  crew: String
  passengers: String
  maxAtmospheringSpeed: Int
  hyperdriveRating: Float
  MGLT: Int
  cargoCapacity: Float
  consumables: String
  pilotConnection(after: String, first: Int, before: String, last: Int): StarshipPilotsConnection
  filmConnection(after: String, first: Int, before: String, last: Int): StarshipFilmsConnection
  created: String
  edited: String
  id: ID!
}

type StarshipFilmsConnection {
  pageInfo: PageInfo!
  edges: [StarshipFilmsEdge]
  totalCount: Int
  films: [Film]
}

type StarshipFilmsEdge {
  node: Film
  cursor: String!
}

type StarshipPilotsConnection {
  pageInfo: PageInfo!
  edges: [StarshipPilotsEdge]
  totalCount: Int
  pilots: [Person]
}

type StarshipPilotsEdge {
  node: Person
  cursor: String!
}

type StarshipsConnection {
  pageInfo: PageInfo!
  edges: [StarshipsEdge]
  totalCount: Int
  starships: [Starship]
}

type StarshipsEdge {
  node: Starship
  cursor: String!
}

`

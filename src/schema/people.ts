export default `

type PeopleConnection {
  pageInfo: PageInfo!
  edges: [PeopleEdge]
  totalCount: Int
  people: [Person]
}

type PeopleEdge {
  node: Person
  cursor: String!
}

type Person implements Node {
  name: String
  birthYear: String
  eyeColor: String
  gender: String
  hairColor: String
  height: Int
  mass: Int
  skinColor: String
  homeworld: Planet
  filmConnection(after: String, first: Int, before: String, last: Int): PersonFilmsConnection
  species: Species
  starshipConnection(after: String, first: Int, before: String, last: Int): PersonStarshipsConnection
  vehicleConnection(after: String, first: Int, before: String, last: Int): PersonVehiclesConnection
  created: String
  edited: String
  id: ID!
}

type PersonFilmsConnection {
  pageInfo: PageInfo!
  edges: [PersonFilmsEdge]
  totalCount: Int
  films: [Film]
}

type PersonFilmsEdge {
  node: Film
  cursor: String!
}

type PersonStarshipsConnection {
  pageInfo: PageInfo!
  edges: [PersonStarshipsEdge]
  totalCount: Int
  starships: [Starship]
}

type PersonStarshipsEdge {
  node: Starship
  cursor: String!
}

type PersonVehiclesConnection {
  pageInfo: PageInfo!
  edges: [PersonVehiclesEdge]
  totalCount: Int
  vehicles: [Vehicle]
}

type PersonVehiclesEdge {
  node: Vehicle
  cursor: String!
}

`

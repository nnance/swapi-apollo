export default `

type Species implements Node {
  name: String
  classification: String
  designation: String
  averageHeight: Float
  averageLifespan: Int
  eyeColors: [String]
  hairColors: [String]
  skinColors: [String]
  language: String
  homeworld: Planet
  personConnection(after: String, first: Int, before: String, last: Int): SpeciesPeopleConnection
  filmConnection(after: String, first: Int, before: String, last: Int): SpeciesFilmsConnection
  created: String
  edited: String
  id: ID!
}

type SpeciesConnection {
  pageInfo: PageInfo!
  edges: [SpeciesEdge]
  totalCount: Int
  species: [Species]
}

type SpeciesEdge {
  node: Species
  cursor: String!
}

type SpeciesFilmsConnection {
  pageInfo: PageInfo!
  edges: [SpeciesFilmsEdge]
  totalCount: Int
  films: [Film]
}

type SpeciesFilmsEdge {
  node: Film
  cursor: String!
}

type SpeciesPeopleConnection {
  pageInfo: PageInfo!
  edges: [SpeciesPeopleEdge]
  totalCount: Int
  people: [Person]
}

type SpeciesPeopleEdge {
  node: Person
  cursor: String!
}

`

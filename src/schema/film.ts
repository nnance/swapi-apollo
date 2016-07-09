export default `

type Film implements Node {
  title: String
  episodeID: Int
  openingCrawl: String
  director: String
  producers: [String]
  releaseDate: String
  speciesConnection(after: String, first: Int, before: String, last: Int): FilmSpeciesConnection
  starshipConnection(after: String, first: Int, before: String, last: Int): FilmStarshipsConnection
  vehicleConnection(after: String, first: Int, before: String, last: Int): FilmVehiclesConnection
  characterConnection(after: String, first: Int, before: String, last: Int): FilmCharactersConnection
  planetConnection(after: String, first: Int, before: String, last: Int): FilmPlanetsConnection
  created: String
  edited: String
  id: ID!
}

type FilmCharactersConnection {
  pageInfo: PageInfo!
  edges: [FilmCharactersEdge]
  totalCount: Int
  characters: [Person]
}

type FilmCharactersEdge {
  node: Person
  cursor: String!
}

type FilmPlanetsConnection {
  pageInfo: PageInfo!
  edges: [FilmPlanetsEdge]
  totalCount: Int
  planets: [Planet]
}

type FilmPlanetsEdge {
  node: Planet
  cursor: String!
}

type FilmsConnection {
  pageInfo: PageInfo!
  edges: [FilmsEdge]
  totalCount: Int
  films: [Film]
}

type FilmsEdge {
  node: Film
  cursor: String!
}

type FilmSpeciesConnection {
  pageInfo: PageInfo!
  edges: [FilmSpeciesEdge]
  totalCount: Int
  species: [Species]
}

type FilmSpeciesEdge {
  node: Species
  cursor: String!
}

type FilmStarshipsConnection {
  pageInfo: PageInfo!
  edges: [FilmStarshipsEdge]
  totalCount: Int
  starships: [Starship]
}

type FilmStarshipsEdge {
  node: Starship
  cursor: String!
}

type FilmVehiclesConnection {
  pageInfo: PageInfo!
  edges: [FilmVehiclesEdge]
  totalCount: Int
  vehicles: [Vehicle]
}

type FilmVehiclesEdge {
  node: Vehicle
  cursor: String!
}

`

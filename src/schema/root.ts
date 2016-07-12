export default `

interface Node {
  id: ID!
}

type RootQuery {
  allFilms(after: String, first: Int, before: String, last: Int): [Film]
  film(id: ID, filmID: ID): Film
  allPeople(after: String, first: Int, before: String, last: Int): [Person]
  person(id: ID, personID: ID): Person
  allPlanets(after: String, first: Int, before: String, last: Int): [Planet]
  planet(id: ID, planetID: ID): Planet
  allSpecies(after: String, first: Int, before: String, last: Int): [Species]
  species(id: ID, speciesID: ID): Species
  allStarships(after: String, first: Int, before: String, last: Int): [Starship]
  starship(id: ID, starshipID: ID): Starship
  allVehicles(after: String, first: Int, before: String, last: Int): [Vehicle]
  vehicle(id: ID, vehicleID: ID): Vehicle
  node(id: ID!): Node
}

`

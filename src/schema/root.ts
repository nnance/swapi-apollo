export default `

type RootQuery {
  allFilms: [Film]
  film(id: ID, filmID: ID): Film
  allPeople: [Person]
  person(id: ID, personID: ID): Person
  allPlanets: [Planet]
  planet(id: ID, planetID: ID): Planet
  allSpecies: [Species]
  species(id: ID, speciesID: ID): Species
  allStarships: [Starship]
  starship(id: ID, starshipID: ID): Starship
  allVehicles: [Vehicle]
  vehicle(id: ID, vehicleID: ID): Vehicle
  node(id: ID!): Node
}

`

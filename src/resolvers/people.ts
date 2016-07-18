export default {
  Person: {
    id: (person) => person.url,
    hairColor: (person) => person.hair_color,
    skinColor: (person) => person.skin_color,
    eyeColor: (person) => person.eye_color,
    birthYear: (person) => person.birth_year,
    homeworld: (person, _, context) => context.planet.getConnection(person.homeworld),
    films: (person, _, context) => context.film.getConnections(person.films),
    species: (person, _, context) => context.species.getConnections(person.species),
    starships: (person, _, context) => context.starship.getConnections(person.starships),
    vehicles: (person, _, context) => context.vehicle.getConnections(person.vehicles),
  },
}

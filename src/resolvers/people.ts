const id = (person) => person.url
const hairColor = (person) => person.hair_color
const skinColor = (person) => person.skin_color
const eyeColor = (person) => person.eye_color
const birthYear = (person) => person.birth_year
const homeworld = (person, _, context) => context.planet.getConnection(person.homeworld)
const films = (person, _, context) => context.film.getConnections(person.films)
const species = (person, _, context) => context.species.getConnections(person.species)
const starships = (person, _, context) => context.starship.getConnections(person.starships)
const vehicles = (person, _, context) => context.vehicle.getConnections(person.vehicles)

export default {
  Person: {
    id,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    homeworld,
    films,
    species,
    starships,
    vehicles,
  },
}

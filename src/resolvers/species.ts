const id = (species) => species.url
const averageHeight = (species) => species.average_height
const skinColors = (species) => species.skin_colors.split(',')
const hairColors = (species) => species.hair_colors.split(',')
const eyeColors = (species) => species.eye_colors.split(',')
const averageLifespan = (species) => species.average_lifespan
const homeworld = (species, _, context) => context.planet.getConnection(species.homeworld)
const people = (species, _, context) => context.people.getConnections(species.people)
const films = (species, _, context) => context.film.getConnections(species.films)

export default {
  Species: {
    id,
    averageHeight,
    skinColors,
    hairColors,
    eyeColors,
    averageLifespan,
    homeworld,
    people,
    films,
  },
}

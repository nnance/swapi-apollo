export default {
  Species: {
    averageHeight: (species) => species.average_height,
    skinColors: (species) => species.skin_colors.split(','),
    hairColors: (species) => species.hair_colors.split(','),
    eyeColors: (species) => species.eye_colors.split(','),
    averageLifespan: (species) => species.average_lifespan,
    homeworld: (species, _, context) => context.planet.getConnection(species.homeworld),
    people: (species, _, context) => context.people.getConnections(species.people),
    films: (species, _, context) => context.film.getConnections(species.films),
  },
}

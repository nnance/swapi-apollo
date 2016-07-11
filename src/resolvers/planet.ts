export default {
  Planet: {
    rotationPeriod: (planet) => planet.rotation_period,
    orbitalPeriod: (planet) => planet.orbital_period,
    surfaceWater: (planet) => planet.surface_water,
    residents: (planet, _, context) => context.people.getConnections(planet.residents),
    films: (planet, _, context) => context.film.getConnections(planet.films),
  },
}

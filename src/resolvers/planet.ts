const path = '/planets/'

export default () => ({
  RootQuery: {
      allPlanets: (_, params, context) =>
        context.pageFetcher(path, params.offset, params.limit),
      planet: (_, params, context) =>
        context.loader.load(params.id || `${path}${params.planetID}/`),
  },
  Planet: {
    id: (planet) => planet.url,
    rotationPeriod: (planet) => planet.rotation_period,
    orbitalPeriod: (planet) => planet.orbital_period,
    surfaceWater: (planet) => planet.surface_water,
    residents: (planet, _, context) => context.loader.loadMany(planet.residents),
    films: (planet, _, context) => context.loader.loadMany(planet.films),
  },
})

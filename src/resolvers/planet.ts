const id = (planet) => planet.url
const rotationPeriod = (planet) => planet.rotation_period
const orbitalPeriod = (planet) => planet.orbital_period
const surfaceWater = (planet) => planet.surface_water
const residents = (planet, _, context) => context.people.getConnections(planet.residents)
const films = (planet, _, context) => context.film.getConnections(planet.films)

export default {
  Planet: {
    id,
    rotationPeriod,
    orbitalPeriod,
    surfaceWater,
    residents,
    films,
  },
}

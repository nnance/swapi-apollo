const allFilms = (_, params, context) => context.film.getFilms(params.offset, params.limit
const film = (_, params, context) => context.film.getFilm(params.id, params.filmID)
const person = (_, params, context) => context.people.getPeople(params.id, params.personID)
const allPeople = (_, params, context) => context.people.getPeoples(params.offset, params.limit)
const allPlanets = (_, params, context) => context.planet.getPlanets(params.offset, params.limit)
const planet = (_, params, context) => context.planet.getPlanet(params.id, params.planetID)
const allSpecies = (_, params, context) => context.species.getAllSpecies(params.offset, params.limit)
const species = (_, params, context) => context.species.getSpecies(params.id, params.speciesID)
const allStarships = (_, params, context) => context.starship.getStarships(params.offset, params.limit)
const starship = (_, params, context) => context.species.getStarship(params.id, params.starshipID)
const allVehicles = (_, params, context) => context.vehicle.getVehicles(params.offset, params.limit)
const vehicle = (_, params, context) => context.vehicle.getVehicle(params.id, params.vehicleID)
const node = (id: number) => ({})

export default {
  RootQuery: {
    allFilms,
    film,
    allPeople,
    person,
    allPlanets,
    planet,
    allSpecies,
    species,
    allStarships,
    starship,
    allVehicles,
    vehicle,
    node,
  },
}

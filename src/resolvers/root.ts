export default {
  RootQuery: {
    allFilms(params, _, context) {
      return context.film.getFilms(params.after, params.first, params.before, params.last)
    },
    film(params, _, context) {
      return context.film.getFilm(params.id, params.filmID)
    },
    allPeople: (after: string, first: number, before: string, last: number) => [],
    person: (id: number, personID: number) => ({}),
    allPlanets: (after: string, first: number, before: string, last: number) => [],
    planet: (id: number, planetID: number) => ({}),
    allSpecies: (after: string, first: number, before: string, last: number) => [],
    species: (id: number, speciesID: number) => ({}),
    allStarships: (after: string, first: number, before: string, last: number) => [],
    starship: (id: number, starshipID: number) => ({}),
    allVehicles: (after: string, first: number, before: string, last: number) => [],
    vehicle(_, params, context) {
      return context.vehicle.getVehicle(params.id, params.vehicleID)
    },
    node: (id: number) => ({}),
  },
}

export default {
  RootQuery: {
    allFilms: (_, params, context) => context.film.getFilms(),
    film: (_, params, context) => context.film.getFilm(params.id, params.filmID),
    allPeople: (_, params, context) => context.people.getPeoples(),
    person: (_, params, context) => context.people.getPeople(params.id, params.personID),
    allPlanets: (after: string, first: number, before: string, last: number) => [],
    planet: (id: number, planetID: number) => ({}),
    allSpecies: (after: string, first: number, before: string, last: number) => [],
    species: (id: number, speciesID: number) => ({}),
    allStarships: (after: string, first: number, before: string, last: number) => [],
    starship: (id: number, starshipID: number) => ({}),
    allVehicles: (_, params, context) => context.vehicle.getVehicles(),
    vehicle: (_, params, context) => context.vehicle.getVehicle(params.id, params.vehicleID),
    node: (id: number) => ({}),
  },
}

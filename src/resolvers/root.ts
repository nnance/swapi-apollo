function person(_, params, context) {
  return context.people.getPeople(params.id, params.personID)
}

export default {
  RootQuery: {
    allFilms: (_, params, context) => context.film.getFilms(params.offset, params.limit),
    film: (_, params, context) => context.film.getFilm(params.id, params.filmID),
    allPeople: (_, params, context) => context.people.getPeoples(params.offset, params.limit),
    person,
    allPlanets: (_, params, context) => context.planet.getPlanets(params.offset, params.limit),
    planet: (_, params, context) => context.planet.getPlanet(params.id, params.planetID),
    allSpecies: (_, params, context) => context.species.getAllSpecies(params.offset, params.limit),
    species: (_, params, context) => context.species.getSpecies(params.id, params.speciesID),
    allStarships: (_, params, context) => context.starship.getStarships(params.offset, params.limit),
    starship: (_, params, context) => context.species.getStarship(params.id, params.starshipID),
    allVehicles: (_, params, context) => context.vehicle.getVehicles(params.offset, params.limit),
    vehicle: (_, params, context) => context.vehicle.getVehicle(params.id, params.vehicleID),
    node: (id: number) => ({}),
  },
}

export default {
  RootQuery: {
    allFilms: (_, params, context) => context.film.getFilms(),
    film: (_, params, context) => context.film.getFilm(params.id, params.filmID),
    allPeople: (_, params, context) => context.people.getPeoples(),
    person: (_, params, context) => context.people.getPeople(params.id, params.personID),
    allPlanets: (_, params, context) => context.planet.getPlanets(),
    planet: (_, params, context) => context.planet.getPlanet(params.id, params.planetID),
    allSpecies: (_, params, context) => context.species.getAllSpecies(),
    species: (_, params, context) => context.species.getSpecies(params.id, params.speciesID),
    allStarships: (_, params, context) => context.starship.getStarships(),
    starship: (_, params, context) => context.species.getStarship(params.id, params.starshipID),
    allVehicles: (_, params, context) => context.vehicle.getVehicles(),
    vehicle: (_, params, context) => context.vehicle.getVehicle(params.id, params.vehicleID),
    node: (id: number) => ({}),
  },
}

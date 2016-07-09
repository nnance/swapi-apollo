export default {
  RootQuery: {
    allFilms: (after: string, first: number, before: string, last: number) => [],
    film: (id: number, filmID: number) => ({}),
    allPeople: (after: string, first: number, before: string, last: number) => [],
    person: (id: number, personID: number) => ({}),
    allPlanets: (after: string, first: number, before: string, last: number) => [],
    planet: (id: number, planetID: number) => ({}),
    allSpecies: (after: string, first: number, before: string, last: number) => [],
    species: (id: number, speciesID: number) => ({}),
    allStarships: (after: string, first: number, before: string, last: number) => [],
    starship: (id: number, starshipID: number) => ({}),
    allVehicles: (after: string, first: number, before: string, last: number) => [],
    vehicle: (id: number, vehicleID: number) => ({}),
    node: (id: number) => ({}),
  },
}

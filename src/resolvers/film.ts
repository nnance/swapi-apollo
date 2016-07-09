export function allFilms(after: string, first: number, before: string, last: number) {
  return []
}

export function getFilm(id: number, filmID: number) {
  return {}
}

export default {
  FilmsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    films: () => [],
  },
  FilmsEdge: {
    node: () => ({}),
  },
  Film: {
    speciesConnection: () => ({}),
    starshipConnection: () => ({}),
    vehicleConnection: () => ({}),
    characterConnection: () => ({}),
    planetConnection: () => ({}),
  },
  FilmSpeciesConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    species: () => [],
  },
  FilmSpeciesEdge: {
    node: () => ({}),
  },
  FilmStarshipsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    starships: () => [],
  },
  FilmStarshipsEdge: {
    node: () => ({}),
  },
  FilmVehiclesConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    vehicles: () => [],
  },
  FilmVehiclesEdge: {
    node: () => ({}),
  },
  FilmCharactersConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    characters: () => [],
  },
  FilmCharactersEdge: {
    node: () => ({}),
  },
  FilmPlanetsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    planets: () => [],
  },
  FilmPlanetsEdge: {
    node: () => ({}),
  },
}

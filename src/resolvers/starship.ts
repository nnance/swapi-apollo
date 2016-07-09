export function allStarships(after: string, first: number, before: string, last: number) {
  return []
}

export function getStarship(id: number, starshipID: number) {
  return {}
}

export default {
  Starship: {
    pilotConnection: () => ({}),
    filmConnection: () => ({}),
  },
  StarshipPilotsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    pilots: () => [],
  },
  StarshipPilotsEdge: {
    node: () => ({}),
  },
  StarshipFilmsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    films: () => [],
  },
  StarshipFilmsEdge: {
    node: () => ({}),
  },
  StarshipsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    starships: () => [],
  },
  StarshipsEdge: {
    node: () => ({}),
  },
}

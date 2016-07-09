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

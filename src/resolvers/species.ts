export default {
  Species: {
    homeworld: () => ({}),
    personConnection: () => ({}),
    filmConnection: () => ({}),
  },
  SpeciesPeopleConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    people: () => [],
  },
  SpeciesPeopleEdge: {
    node: () => ({}),
  },
  SpeciesFilmsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    films: () => [],
  },
  SpeciesFilmsEdge: {
    node: () => ({}),
  },
  SpeciesConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    species: () => [],
  },
  SpeciesEdge: {
    node: () => ({}),
  },
}

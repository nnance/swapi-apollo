export function allSpecies(after: string, first: number, before: string, last: number) {
  return []
}

export function getSpecies(id: number, speciesID: number) {
  return {}
}

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

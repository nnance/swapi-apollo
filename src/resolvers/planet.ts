export function allPlanets(after: string, first: number, before: string, last: number) {
  return []
}

export function getPlanet(id: number, planetID: number) {
  return {}
}

export default {
  Planet: {
    residentConnection: () => ({}),
    filmConnection: () => ({}),
  },
  PlanetResidentsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    residents: () => [],
  },
  PlanetResidentsEdge: {
    node: () => ({}),
  },
  PlanetFilmsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    films: () => [],
  },
  PlanetFilmsEdge: {
    node: () => ({}),
  },
  PlanetsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    planets: () => [],
  },
  PlanetsEdge: {
    node: () => ({}),
  },
}

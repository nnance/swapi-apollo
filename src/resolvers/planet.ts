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

export default {
  Vehicle: {
    pilotConnection: () => ({}),
    filmConnection: () => ({}),
  },
  VehiclePilotsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    pilots: () => [],
  },
  VehiclePilotsEdge: {
    node: () => ({}),
  },
  VehicleFilmsConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    films: () => [],
  },
  VehicleFilmsEdge: {
    node: () => ({}),
  },
  VehiclesConnection: {
    pageInfo: () => ({}),
    edges: () => [],
    vehicles: () => [],
  },
  VehiclesEdge: {
    node: () => ({}),
  },
}

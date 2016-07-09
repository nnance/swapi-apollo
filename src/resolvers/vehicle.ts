export function allVehicles(after: string, first: number, before: string, last: number) {
  return []
}

export function getVehicle(id: number, vehicleID: number) {
  return {}
}

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

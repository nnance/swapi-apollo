export default `

type Vehicle implements Node {
  name: String
  model: String
  vehicleClass: String
  manufacturers: [String]
  costInCredits: Int
  length: Float
  crew: String
  passengers: String
  maxAtmospheringSpeed: Int
  cargoCapacity: Int
  consumables: String
  pilotConnection(after: String, first: Int, before: String, last: Int): VehiclePilotsConnection
  filmConnection(after: String, first: Int, before: String, last: Int): VehicleFilmsConnection
  created: String
  edited: String
  id: ID!
}

type VehicleFilmsConnection {
  pageInfo: PageInfo!
  edges: [VehicleFilmsEdge]
  totalCount: Int
  films: [Film]
}

type VehicleFilmsEdge {
  node: Film
  cursor: String!
}

type VehiclePilotsConnection {
  pageInfo: PageInfo!
  edges: [VehiclePilotsEdge]
  totalCount: Int
  pilots: [Person]
}

type VehiclePilotsEdge {
  node: Person
  cursor: String!
}

type VehiclesConnection {
  pageInfo: PageInfo!
  edges: [VehiclesEdge]
  totalCount: Int
  vehicles: [Vehicle]
}

type VehiclesEdge {
  node: Vehicle
  cursor: String!
}
`

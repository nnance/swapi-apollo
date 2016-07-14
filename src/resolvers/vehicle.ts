const id = (vehicle) => vehicle.url
const costInCredits = (vehicle) => vehicle.cost_in_credits
const maxAtmospheringSpeed = (vehicle) => vehicle.max_atmosphering_speed
const cargoCapacity = (vehicle) => vehicle.cargo_capacity
const vehicleClass = (vehicle) => vehicle.vehicle_class
const pilots = (vehicle, _, context) => context.people.getConnections(vehicle.pilots)
const films = (vehicle, _, context) => context.film.getConnections(vehicle.films)

export default {
  Vehicle: {
    id,
    costInCredits,
    maxAtmospheringSpeed,
    cargoCapacity,
    vehicleClass,
    pilots,
    films,
  },
}

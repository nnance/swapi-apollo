const id = (starship) => starship.url
const costInCredits = (starship) => starship.cost_in_credits
const maxAtmospheringSpeed = (starship) => starship.max_atmosphering_speed
const cargoCapacity = (starship) => starship.cargo_capacity
const hyperdriveRating = (starship) => starship.hyperdrive_rating
const starshipClass = (starship) => starship.starship_class
const pilots = (starship, _, context) => context.people.getConnections(starship.pilots)
const films = (starship, _, context) => context.film.getConnections(starship.films)

export default {
  Starship: {
    id,
    costInCredits,
    maxAtmospheringSpeed,
    cargoCapacity,
    hyperdriveRating,
    starshipClass,
    pilots,
    films,
  },
}

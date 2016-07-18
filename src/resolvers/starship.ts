export default {
  Starship: {
    id: (starship) => starship.url,
    costInCredits: (starship) => starship.cost_in_credits,
    maxAtmospheringSpeed: (starship) => starship.max_atmosphering_speed,
    cargoCapacity: (starship) => starship.cargo_capacity,
    hyperdriveRating: (starship) => starship.hyperdrive_rating,
    starshipClass: (starship) => starship.starship_class,
    pilots: (starship, _, context) => context.people.getConnections(starship.pilots),
    films: (starship, _, context) => context.film.getConnections(starship.films),
  },
}

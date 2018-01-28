const path = '/starships/'

export default () => ({
  RootQuery: {
      allStarships: (_, params, context) =>
        context.pageFetcher(path, params.offset, params.limit),
      starship: (_, params, context) =>
        context.fetcher(params.id || `${path}${params.starshipID}/`),
  },
  Starship: {
    id: (starship) => starship.url,
    costInCredits: (starship) => starship.cost_in_credits,
    maxAtmospheringSpeed: (starship) => starship.max_atmosphering_speed,
    cargoCapacity: (starship) => starship.cargo_capacity,
    hyperdriveRating: (starship) => starship.hyperdrive_rating,
    starshipClass: (starship) => starship.starship_class,
    pilots: (starship, _, context) => context.loader.loadMany(starship.pilots),
    films: (starship, _, context) => context.loader.loadMany(starship.films),
  },
})

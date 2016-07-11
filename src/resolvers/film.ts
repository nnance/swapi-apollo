export default {
  Film: {
    id: (film) => film.url,
    episodeID: (film) => film.episode_id,
    openingCrawl: (film) => film.opening_crawl,
    releaseDate: (film) => film.release_date,
    species: (film, _, context) => context.species.getConnections(film.species),
    starships: (film, _, context) => context.starship.getConnections(film.starships),
    vehicles: (film, _, context) => context.vehicle.getConnections(film.vehicles),
    characters: (film, _, context) => context.people.getConnections(film.characters),
    planets: (film, _, context) => context.planet.getConnections(film.planets),
  },
}

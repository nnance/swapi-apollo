const id = (film) => film.url
const episodeID = (film) => film.episode_id
const openingCrawl = (film) => film.opening_crawl
const releaseDate = (film) => film.release_date
const species = (film, _, context) => context.species.getConnections(film.species)
const starships = (film, _, context) => context.starship.getConnections(film.starships)
const vehicles = (film, _, context) => context.vehicle.getConnections(film.vehicles)
const characters = (film, _, context) => context.people.getConnections(film.characters)
const planets = (film, _, context) => context.planet.getConnections(film.planets)

export default {
  Film: {
    id,
    episodeID,
    openingCrawl,
    releaseDate,
    species,
    starships,
    vehicles,
    characters,
    planets,
  },
}

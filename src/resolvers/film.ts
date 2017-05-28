const id = (film) => film.url
const episodeID = (film) => film.episode_id
const openingCrawl = (film) => film.opening_crawl
const releaseDate = (film) => film.release_date
const species = (details, _, context) => context.species.getConnections(details.species)
const starships = (details, _, context) => context.starship.getConnections(details.starships)
const vehicles = (details, _, context) => context.vehicle.getConnections(details.vehicles)
const characters = (details, _, context) => context.people.getConnections(details.characters)
const planets = (details, _, context) => context.planet.getConnections(details.planets)

export default {
  Film: {
    id,
    episodeID,
    openingCrawl,
    releaseDate,
  },
  FilmDetails: {
    species,
    starships,
    vehicles,
    characters,
    planets,
  },
}

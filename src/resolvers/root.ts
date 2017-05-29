import { IFetcher, getPageFetcher } from '../connectors/swapi'

export default (fetch: IFetcher) => {
  const pageFetch = getPageFetcher(fetch)

  return {
    RootQuery: {
      allFilms: (_, params) => pageFetch('/films/', params.offset, params.limit),
      film: (_, params) => fetch(params.id || `/films/${params.filmID}/`),
      allPeople: (_, params) => pageFetch('/people/', params.offset, params.limit),
      person: (_, params) => fetch(params.id || `/people/${params.personID}/`),
      allPlanets: (_, params) => pageFetch('/planets/', params.offset, params.limit),
      planet: (_, params) => fetch(params.id || `/planets/${params.planetID}/`),
      allSpecies: (_, params) => pageFetch('/species/', params.offset, params.limit),
      species: (_, params) => fetch(params.id || `/species/${params.speciesID}/`),
      allStarships: (_, params) => pageFetch('/starships/', params.offset, params.limit),
      starship: (_, params) => fetch(params.id || `/starships/${params.starshipID}/`),
      allVehicles: (_, params) => pageFetch('/vehicles/', params.offset, params.limit),
      vehicle: (_, params) => fetch(params.id || `/vehicles/${params.vehicleID}/`),
      node: (id: number) => ({}),
    },
  }
}

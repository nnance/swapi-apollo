import { getPageFetcher } from '../connectors/swapi'

const path = '/people/'

export default (fetch) => ({
  RootQuery: {
      allPeople: (_, params) => getPageFetcher(fetch)(path, params.offset, params.limit),
      person: (_, params) => fetch(params.id || `${path}${params.personID}/`),
  },
  Person: {
    id: (person) => person.url,
    hairColor: (person) => person.hair_color,
    skinColor: (person) => person.skin_color,
    eyeColor: (person) => person.eye_color,
    birthYear: (person) => person.birth_year,
    homeworld: (person, _, context) => context.loader.loadMany(person.homeworld),
    films: (person, _, context) => context.loader.loadMany(person.films),
    species: (person, _, context) => context.loader.loadMany(person.species),
    starships: (person, _, context) => context.loader.loadMany(person.starships),
    vehicles: (person, _, context) => context.loader.loadMany(person.vehicles),
  },
})

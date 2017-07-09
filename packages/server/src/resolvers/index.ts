import { IFetcher } from '../connectors/swapi'
import film from './film'
import people from './people'
import species from './species'
import starship from './starship'
import vehicle from './vehicle'

export default (fetch: IFetcher) => Object.assign(
    {},
    film(fetch),
    people(fetch),
    species(fetch),
    starship(fetch),
    vehicle(fetch),
    {
        RootQuery: Object.assign(
            {},
            film(fetch).RootQuery,
            people(fetch).RootQuery,
            species(fetch).RootQuery,
            starship(fetch).RootQuery,
            vehicle(fetch).RootQuery,
        ),
    },
)

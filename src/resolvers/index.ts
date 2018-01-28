import film from './film'
import people from './people'
import planet from './planet'
import species from './species'
import starship from './starship'
import vehicle from './vehicle'

export default Object.assign(
    {},
    film(),
    people(),
    planet(),
    species(),
    starship(),
    vehicle(),
    {
        RootQuery: Object.assign(
            {},
            film().RootQuery,
            people().RootQuery,
            planet().RootQuery,
            species().RootQuery,
            starship().RootQuery,
            vehicle().RootQuery,
        ),
    },
)

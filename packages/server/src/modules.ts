import typesModule from 'swapi-apollo-types'
import planetsModule from 'swapi-apollo-planets'
import baseModule from './schema'

export default ( apiHost: string ) => [
    typesModule,
    planetsModule({ apiHost }),
    baseModule({ apiHost }),
]

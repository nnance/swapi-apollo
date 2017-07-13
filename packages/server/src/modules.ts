import typesModule from 'swapi-apollo-types'
import planetsModule from 'swapi-apollo-planets'
import baseModule from './schema'

export default ( apiHost: string ) =>
    [{
        module: typesModule,
        options: {},
    }, {
        module: planetsModule,
        options: { apiHost },
    }, {
        module: baseModule,
        options: { apiHost },
    }]

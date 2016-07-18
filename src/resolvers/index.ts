import rootQuery from './root'
import film from './film'
import people from './people'
import planet from './planet'
import species from './species'
import starship from './starship'
import vehicle from './vehicle'

export default Object.assign(rootQuery, film, people, planet, species, starship, vehicle)

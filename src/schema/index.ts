import film from './film'
import pagination from './pagination'
import people from './people'
import planet from './planet'
import root from './root'
import species from './species'
import starship from './starship'
import vehicle from './vehicle'


const schema = `
schema {
  query: RootQuery
}
`

export default [
  film,
  pagination,
  people,
  planet,
  root,
  species,
  starship,
  vehicle,
  schema,
]

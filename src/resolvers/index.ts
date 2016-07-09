import film, {allFilms, getFilm} from './film'
import people, {allPeople, person} from './people'
import planet, {allPlanets, getPlanet} from './planet'
import species, {allSpecies, getSpecies} from './species'
import starship, {allStarships, getStarship} from './starship'
import vehicle, {allVehicles, getVehicle} from './vehicle'

const rootQuery = {
  RootQuery: {
    allFilms,
    film: getFilm,
    allPeople,
    person,
    allPlanets,
    planet: getPlanet,
    allSpecies,
    species: getSpecies,
    allStarships,
    starship: getStarship,
    allVehicles,
    vehicle: getVehicle,
    node: () => ({}),
  },
}

export default Object.assign(rootQuery, film, people, planet, species, starship, vehicle);

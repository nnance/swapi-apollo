import BaseModel from './base'

const convertFilm = (film) => {
  film.details = {
    species: film.species,
    starships: film.starships,
    vehicles: film.vehicles,
    characters: film.characters,
    planets: film.planets,
  }
  return film
}

const transform = (conversion) => (films) => films.map(conversion)

export default class Film extends BaseModel {

  public getFilms(offset?: number, limit?: number) {
    return this.connector
            .fetchPage('/films/', offset, limit)
            .then(transform(convertFilm))
  }

  public getFilm(id: string, filmID: number) {
    const url = id || `/films/${filmID}/`
    return this.connector
            .fetch(url)
            .then(transform(convertFilm))
  }
}

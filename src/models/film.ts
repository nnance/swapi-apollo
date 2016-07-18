import BaseModel from './base'

export default class Film extends BaseModel {

  public getFilms(offset?: number, limit?: number) {
    return this.connector.fetchPage('/films/', offset, limit)
  }

  public getFilm(id: string, filmID: number) {
    const url = id || `/films/${filmID}/`
    return this.connector.fetch(url)
  }
}

import BaseModel from './base'

export default class Film extends BaseModel {

  public getFilms(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/films/', after, first, before, last)
  }

  public getFilm(id: string, filmID: number) {
    const url = id || `/films/${filmID}`
    return this.connector.fetch(url)
  }
}

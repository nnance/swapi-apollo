import BaseModel from './base'

export default class Film extends BaseModel {

  public getFilms() {
    return this.connector.fetch('/films/')
  }

  public getFilm(id: string, filmID: number) {
    const url = id || `/films/${filmID}`
    return this.connector.fetch(url)
  }
}

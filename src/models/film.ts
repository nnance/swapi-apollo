import BaseModel from './base'

export default class Film extends BaseModel {

  public getFilms() {
    return this.connector.fetch('/films/')
  }

  public getFilm(id: number, filmID: number) {
    return this.connector.fetch(`/films/${id}`);
  }
}

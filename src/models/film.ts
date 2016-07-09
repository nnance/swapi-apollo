import BaseModel from './base'

export default class Film extends BaseModel {

  public getFilms(after: string, first: number, before: string, last: number) {
    return {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => this.connector.fetch('/films'),
    };
  }

  public getFilm(id: number, filmID: number) {
    return this.connector.get(`/films/${id}`);
  }
}

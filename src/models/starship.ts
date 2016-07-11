import BaseModel from './base'

export default class Starship extends BaseModel {

  public getStarships() {
    return this.connector.fetch('/startships/')
  }

  public getStarship(id: number, starshipID: number) {
    return this.connector.fetch(`/startships/${id}/`)
  }
}

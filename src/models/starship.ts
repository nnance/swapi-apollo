import BaseModel from './base'

export default class Starship extends BaseModel {

  public getStarships() {
    return this.connector.fetch('/starships/')
  }

  public getStarship(id: string, starshipID: number) {
    const url = id || `/starships/${starshipID}`
    return this.connector.fetch(url)
  }
}

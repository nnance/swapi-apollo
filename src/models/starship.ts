import BaseModel from './base'

export default class Starship extends BaseModel {

  public getStarships() {
    return this.connector.fetch('/startships/')
  }

  public getStarship(id: string, starshipID: number) {
    const url = id || `/startships/${starshipID}`
    return this.connector.fetch(url)
  }
}

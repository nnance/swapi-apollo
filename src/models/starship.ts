import BaseModel from './base'

export default class Starship extends BaseModel {

  public getStarships(offset?: number, limit?: number) {
    return this.connector.fetchPage('/starships/', offset, limit)
  }

  public getStarship(id: string, starshipID: number) {
    const url = id || `/starships/${starshipID}/`
    return this.connector.fetch(url)
  }
}

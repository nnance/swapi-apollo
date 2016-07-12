import BaseModel from './base'

export default class Starship extends BaseModel {

  public getStarships(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/starships/', after, first, before, last)
  }

  public getStarship(id: string, starshipID: number) {
    const url = id || `/starships/${starshipID}`
    return this.connector.fetch(url)
  }
}

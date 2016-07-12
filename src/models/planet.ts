import BaseModel from './base'

export default class Planet extends BaseModel {

  public getPlanets(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/planets/', after, first, before, last)
  }

  public getPlanet(id: string, planetID: number) {
    const url = id || `/planets/${planetID}`
    return this.connector.fetch(url)
  }
}

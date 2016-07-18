import BaseModel from './base'

export default class Planet extends BaseModel {

  public getPlanets(offset?: number, limit?: number) {
    return this.connector.fetchPage('/planets/', offset, limit)
  }

  public getPlanet(id: string, planetID: number) {
    const url = id || `/planets/${planetID}/`
    return this.connector.fetch(url)
  }
}

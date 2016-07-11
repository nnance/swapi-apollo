import BaseModel from './base'

export default class Planet extends BaseModel {

  public getPlanets() {
    return this.connector.fetch('/planets/')
  }

  public getPlanet(id: string, planetID: number) {
    const url = id || `/planets/${planetID}`
    return this.connector.fetch(url)
  }
}

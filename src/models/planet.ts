import BaseModel from './base'

export default class Planet extends BaseModel {

  public getPlanets() {
    return this.connector.fetch('/planets/')
  }

  public getPlanet(id: number, planetID: number) {
    return this.connector.fetch(`/planets/${id}/`)
  }
}

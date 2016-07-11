import BaseModel from './base'

export default class Species extends BaseModel {

  public getAllSpecies() {
    return this.connector.fetch('/species/')
  }

  public getSpecies(id: number, starshipID: number) {
    return this.connector.fetch(`/species/${id}/`)
  }
}

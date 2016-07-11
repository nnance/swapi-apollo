import BaseModel from './base'

export default class Species extends BaseModel {

  public getAllSpecies() {
    return this.connector.fetch('/species/')
  }

  public getSpecies(id: string, speciesID: number) {
    const url = id || `/species/${speciesID}`
    return this.connector.fetch(url)
  }
}

import BaseModel from './base'

export default class Species extends BaseModel {

  public getAllSpecies(offset?: number, limit?: number) {
    return this.connector.fetchPage('/species/', offset, limit)
  }

  public getSpecies(id: string, speciesID: number) {
    const url = id || `/species/${speciesID}/`
    return this.connector.fetch(url)
  }
}

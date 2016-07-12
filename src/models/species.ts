import BaseModel from './base'

export default class Species extends BaseModel {

  public getAllSpecies(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/species/', after, first, before, last)
  }

  public getSpecies(id: string, speciesID: number) {
    const url = id || `/species/${speciesID}`
    return this.connector.fetch(url)
  }
}

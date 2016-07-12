import BaseModel from './base'

export default class People extends BaseModel {

  public getPeoples(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/people/', after, first, before, last)
  }

  public getPeople(id: string, personID: number) {
    const url = id || `/people/${personID}`
    return this.connector.fetch(url)
  }
}

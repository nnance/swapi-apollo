import BaseModel from './base'

export default class People extends BaseModel {

  public getPeoples(offset?: number, limit?: number) {
    return this.connector.fetchPage('/people/', offset, limit)
  }

  public getPeople(id: string, personID: number) {
    const url = id || `/people/${personID}/`
    return this.connector.fetch(url)
  }
}

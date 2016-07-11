import BaseModel from './base'

export default class People extends BaseModel {

  public getPeoples() {
    return this.connector.fetch('/people/')
  }

  public getPeople(id: string, personID: number) {
    const url = id || `/people/${personID}`
    return this.connector.fetch(url)
  }
}

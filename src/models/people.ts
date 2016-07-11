import BaseModel from './base'

export default class People extends BaseModel {

  public getPeoples() {
    return this.connector.fetch('/people/')
  }

  public getPeople(id: number, personID: number) {
    return this.connector.fetch(`/people/${id}/`)
  }
}

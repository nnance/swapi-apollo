import BaseModel from './base'

export default class Vehicle extends BaseModel {

  public getVehicles(after?: string, first?: number, before?: string, last?: number) {
    return this.connector.fetchPage('/vehicles/', after, first, before, last)
  }

  public getVehicle(id: string, vehicleID: number) {
    const url = id || `/vehicles/${vehicleID}`
    return this.connector.fetch(url)
  }
}

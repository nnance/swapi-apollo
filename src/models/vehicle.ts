import BaseModel from './base'

export default class Vehicle extends BaseModel {

  public getVehicles(offset?: number, limit?: number) {
    return this.connector.fetchPage('/vehicles/', offset, limit)
  }

  public getVehicle(id: string, vehicleID: number) {
    const url = id || `/vehicles/${vehicleID}/`
    return this.connector.fetch(url)
  }
}

import BaseModel from './base'

export default class Vehicle extends BaseModel {

  public getVehicles() {
    return this.connector.fetch('/vehicles/')
  }

  public getVehicle(id: string, vehicleID: number) {
    const url = id || `/vehicles/${vehicleID}`
    return this.connector.fetch(url)
  }
}

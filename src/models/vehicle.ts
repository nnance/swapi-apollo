import BaseModel from './base'

export default class Vehicle extends BaseModel {

  public getVehicles() {
    return this.connector.fetch('/vehicles/')
  }

  public getVehicle(id: number, vehicleID: number) {
    return this.connector.fetch(`/vehicles/${id}/`)
  }
}

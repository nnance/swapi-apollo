import BaseModel from './base'

export default class Vehicle extends BaseModel {

  public getVehicles(after: string, first: number, before: string, last: number) {
    return {
      pageInfo: () => ({}),
      edges: () => [],
      films: () => this.connector.fetch('/vehicles'),
    };
  }

  public getVehicle(id: number, vehicleID: number) {
    return this.connector.get(`/vehicles/${id}/`);
  }
}

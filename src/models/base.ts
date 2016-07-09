import SWAPIConnector from '../connector'

export default class BaseModel {
  protected connector: SWAPIConnector

  constructor(connector) {
    this.connector = connector;
  }
}

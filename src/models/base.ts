import SWAPIConnector from '../connector'

export default class BaseModel {
  protected connector: SWAPIConnector

  constructor(connector) {
    this.connector = connector;
  }

  public getConnections(urls: Array<string>) {
    return urls.map(url => this.connector.fetch(url))
  }
}

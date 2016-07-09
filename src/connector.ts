export default class SWAPIConnector {
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL;
  }

  public fetch(resource: string) {
    return [];
  }

  public get(resource: string) {
    return {};
  }
}

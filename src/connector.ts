import * as request from 'request'

export default class SWAPIConnector {
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL;
  }

  public fetch(resource: string) {
    return [];
  }

  public get(resource: string) {
    const url = this.rootURL + resource

    return new Promise((resolve, reject) => {
      request.get(url, (err, resp, body) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(body));
        }
      })
    })
  }
}

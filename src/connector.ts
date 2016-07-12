import * as request from 'request'


export interface PaginationResult {
  count?: number;
  next?: string;
  previous?: string;
  results: Array<{}>
}

export default class SWAPIConnector {
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL;
  }

  public fetch(resource: string) {
    const url = resource.indexOf(this.rootURL) === 0 ? resource : this.rootURL + resource

    return new Promise<PaginationResult | any>((resolve, reject) => {
      request.get(url, (err, resp, body) => {
        if (err) {
          reject(err)
        } else {
          const data = JSON.parse(body)
          if (data.next) {
            this.fetch(data.next).then(page => resolve(data.results.concat(page)))
          } else if (data.results) {
            resolve(data.results)
          } else {
            resolve(data)
          }
        }
      })
    })
  }
}

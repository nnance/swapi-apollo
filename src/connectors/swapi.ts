import * as request from 'request'


export default class SWAPIConnector {
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL;
  }

  public fetch(resource: string) {
    const url = resource.indexOf(this.rootURL) === 0 ? resource : this.rootURL + resource

    return new Promise<any>((resolve, reject) => {
      request.get(url, (err, resp, body) => err ? reject(err) : resolve(JSON.parse(body)))
    })
  }

  public fetchPage(resource: string, after?: string, first?: number, before?: string, last?: number) {
    let results = []
    const firstIdx = first || 0

    function pagination(pageURL: string) {
      return new Promise<any>((resolve, reject) => {
        this.fetch(pageURL).then((data) => {
          if (firstIdx > 0 && firstIdx - results.length - data.results.length < 0) {
            results = results.concat(data.results.slice(0, firstIdx - results.length))
          } else {
            results = results.concat(data.results)
          }
          console.log(`first: ${first} size: ${results.length} ${pageURL}`)
          if (data.next && (firstIdx === 0 || firstIdx - results.length > 0)) {
            pagination.call(this, data.next).then(resolve)
          } else {
            resolve(results)
          }
        })
      })
    }

    return pagination.call(this, resource);
  }
}

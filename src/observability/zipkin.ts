const {Tracer, ExplicitContext, ConsoleRecorder, BatchRecorder} = require('zipkin')
const {HttpLogger} = require('zipkin-transport-http')
const wrapRequest = require('zipkin-instrumentation-request')
const request = require('request')

const ctxImpl = new ExplicitContext()
const options = {
    logger: new HttpLogger({
      endpoint: `${process.env.ZIPKIN_HOST}/api/v1/spans`,
    }),
}
const recorder = process.env.ZIPKIN_HOST ? new BatchRecorder(options) : new ConsoleRecorder()

export const tracer = new Tracer({ctxImpl, recorder, localServiceName: 'swapi-apollo'})

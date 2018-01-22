const {Tracer, ExplicitContext, BatchRecorder} = require('zipkin')
const {HttpLogger} = require('zipkin-transport-http')
const wrapRequest = require('zipkin-instrumentation-request')
const request = require('request')

const ctxImpl = new ExplicitContext()
const recorder = new BatchRecorder({
    logger: new HttpLogger({
      endpoint: 'http://localhost:9411/api/v1/spans',
    }),
  })

export const tracer = new Tracer({ctxImpl, recorder, localServiceName: 'swapi-apollo'})

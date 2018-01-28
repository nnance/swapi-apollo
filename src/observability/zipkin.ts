const {Tracer, ExplicitContext, ConsoleRecorder, BatchRecorder} = require('zipkin')
const {HttpLogger} = require('zipkin-transport-http')
const wrapRequest = require('zipkin-instrumentation-request')
const request = require('request')
import {TraceId} from 'zipkin'

const options = {
    logger: new HttpLogger({
      endpoint: `${process.env.ZIPKIN_HOST}/api/v1/spans`,
    }),
}
const recorder = process.env.ZIPKIN_HOST ? new BatchRecorder(options) : new ConsoleRecorder()

export const getTracer = (id?: TraceId) => {
  const ctxImpl = new ExplicitContext()
  const trace = new Tracer({ctxImpl, recorder, localServiceName: 'swapi-apollo'})
  if (id !== undefined) {
    trace.setId(id.traceId)
  }
  return trace
}

export const tracer = getTracer()

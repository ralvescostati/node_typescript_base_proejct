import pino from 'pino'
// @ts-ignore
import pinoInspector from 'pino-inspector'

export default {
  new: () => {
    const debug = process.env.DEBUG === 'true'

    if (debug) {
      return pino({
        enabled: process.env.ENABLE_LOG === 'true',
        level: process.env.LOG_LEVEL || 'warn',
        prettifier: pinoInspector,
        transport: {
          target: 'pino-pretty'
        }
      })
    }

    return pino({
        enabled: process.env.ENABLE_LOG === 'true',
        level: process.env.LOG_LEVEL || 'warn'
      })
  }
}

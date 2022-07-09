import pino from 'pino'

export default {
  new: () => {
    const debug = process.env.DEBUG === 'true'

    if (debug) {
      return pino({
        enabled: process.env.ENABLE_LOG === 'true',
        level: process.env.LOG_LEVEL || 'warn',
        prettifier: require('pino-inspector'),
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

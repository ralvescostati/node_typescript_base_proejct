
import ILogger from '@app/interfaces/i_logging'
import Environments from '@infra/env/env'
import { IHttpServer } from '@infra/server/http_server'
import Container from './container'
require('newrelic')

;(() => {
  Environments.register()
  const container = Container.register()

  const { httpServer, logger }: {httpServer: IHttpServer, logger: ILogger} = container.cradle

  httpServer.setup()
  httpServer.registerRoute('get', '/get', (req: any, res: any) => {
    logger.info('Start')
    logger.error('ai pai')
    res.json({})
    logger.warn('acaboooo')
  })
  httpServer.run()
})()

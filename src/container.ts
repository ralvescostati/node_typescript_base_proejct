import { createContainer, InjectionMode, asValue, AwilixContainer, asFunction } from 'awilix'

import Logging from '@infra/logging/logging'
import HttpServer from '@infra/server/http_server'

export const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

export default {
  register: (): AwilixContainer => {
    container.register({
      logger: asValue(Logging.new()),
      httpServer: asFunction(HttpServer).singleton()
    })

    return container
  }
}

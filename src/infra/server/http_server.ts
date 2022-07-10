
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import ILogger from '@app/interfaces/i_logging'

export const server = express()

export interface IHttpServer {
  setup: () => void
  registerRoute: (method: string, path: string, handler: any) => void
  run: () => void
}

export default ({ logger }: {logger: ILogger}): IHttpServer => ({
  setup: (): void => {
   server.use(cors())
   server.use(helmet())
   server.use(compression())
   server.use(express.json())
  },

  registerRoute: (method: string, path: string, handler: any): void => {
    (server as any)[method](path, handler)
  },

  run: (): void => {
    const port = process.env.PORT || 3333
    server.listen(
      port,
      () => logger.info({ message: `server running on port ${port}` })
    )
  }
})

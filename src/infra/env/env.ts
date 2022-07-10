const dotEnv = require('dotenv')

export default {
  register: () => {
    const nodeEnv = process.env.NODE_ENV || 'development'
    dotEnv.config({ path: `.env.${nodeEnv}` })
  }
}

import { Sequelize } from 'sequelize'
import config from './config/index.mjs'
import pino from 'pino'

const logger = pino()

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: 'postgres',
    logging: message => logger.debug(message)
  },
)

export default sequelize
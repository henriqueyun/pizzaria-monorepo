import { Sequelize } from 'sequelize'
import config from './config/index.mjs'
import pino from 'pino'

const logger = pino()

const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUser,
  config.databasePassword,
  {
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    logging: message => logger.debug(message)
  },
)
export default sequelize
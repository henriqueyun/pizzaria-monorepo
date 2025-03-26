import { Sequelize } from 'sequelize'
import config from './config/index.mjs'
import pino from 'pino'

const logger = pino()

const sequelize = new Sequelize(config.databaseUri, {
  logging: message => logger.debug(message)
})

export default sequelize
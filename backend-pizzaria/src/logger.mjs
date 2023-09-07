import pino from 'pino'
import config from './config/index.mjs'

const logger = pino({ level: config.logLevel })

export default logger
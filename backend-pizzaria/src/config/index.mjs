import dbConfig from './db-config.mjs'

const dbConfigEnv = dbConfig[process.env.NODE_ENV || 'development']

const config = {
  database: {
    name: dbConfigEnv.database || 'pizzaria',
    user: dbConfigEnv.username || 'root',
    password: dbConfigEnv.password || 'root',
    host: dbConfigEnv.host|| 'localhost',
    port: dbConfigEnv.port || 5432,
  },
  logLevel: process.env.LOG_LEVEL || 'debug',
  port: process.env.PORT || 8000,
  imgurToken: process.env.IMGUR_TOKEN
}

export default config

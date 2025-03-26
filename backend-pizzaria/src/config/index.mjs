
const config = {
  databaseUri: process.env.DB_URI,
  logLevel: process.env.LOG_LEVEL || 'debug',
  port: process.env.PORT || 8000,
  imgurToken: process.env.IMGUR_TOKEN
}

export default config

import express from 'express'
import router from './router/index.mjs'
import config from './config/index.mjs'
import sequelize from './sequelize.mjs'

const app = express()
app.use(express.json())

app.use('/api/v1/', router)

app.listen(config.port, () => {
  console.log(`running on ${config.port}`)
})

export default app 
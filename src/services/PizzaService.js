const axios = require('axios')

class PizzaService {
  static async get(id) {
    const { data } = await (await axios.get(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/api/v1/pizza/${id}`))
    return data
  }

  static async getAll() {
    const { data } = await (await axios.get(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/api/v1/bebida/all`))
    return data
  }
}

module.exports = PizzaService
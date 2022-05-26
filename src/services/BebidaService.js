const axios = require('axios')

class BebidaService {
  static async get(id) {
    const { data } = await (await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/bebida/${id}`))
    return data
  }

  static async getAll() {
    const { data } = await (await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/bebida/all`))
    return data
  }
}

module.exports = BebidaService
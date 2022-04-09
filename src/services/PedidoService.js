const axios = require('axios')

class PedidoService {
  static async post(pedido) {
    return await axios.post(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/api/v1/pedido`, pedido)
  }

  static async get(id) {
    const pedidoResponse = await axios.get(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/api/v1/pedido/${id}`)
    return pedidoResponse.data
  }
}

module.exports = PedidoService
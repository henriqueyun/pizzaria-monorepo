const axios = require('axios')

class PedidoService {
  static async post(pedido) {
    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/pedido`, pedido)
      .catch(err => {
        console.error(err)
      })
    return response
  }

  static async get(id) {
    let pedidoResponse 
    try {
      pedidoResponse = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/pedido/${id}`)
      return pedidoResponse.data
    } catch(err) {
      console.error(err)
      throw new Error(err.message)  
    }
  }
}

module.exports = PedidoService
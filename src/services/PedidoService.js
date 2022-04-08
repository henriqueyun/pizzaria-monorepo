const axios = require('axios')

class PedidoService {
  constructor(nome, preco, imagem) {
    this.nome = nome
    this.preco = preco
    this.imagem = imagem
  }

  static async post(pedido) {
    return await axios.post(`${process.env.VUE_APP_MIDDLEWARE_API_URL}/api/v1/pedido`, pedido)
  }
}

module.exports = PedidoService
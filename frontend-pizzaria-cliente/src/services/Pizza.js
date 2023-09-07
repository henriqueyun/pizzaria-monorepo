import Produto from './Produto'

class Pizza extends Produto {
  constructor(nome, preco, imagem, ingredientes, saborAdicional) {
    super(nome, preco, imagem)
    this.ingredientes = ingredientes
    this.saborAdicional = saborAdicional
  }
}

module.exports = Pizza
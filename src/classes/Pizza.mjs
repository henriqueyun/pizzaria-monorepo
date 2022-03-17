import Produto from './Produto.mjs'

export default class Pizza extends Produto {
  constructor(nome, preco, imgURL, ingredientes, saborAdicional) {
    super(nome, preco, imgURL)
    this.ingredientes = ingredientes
    this.saborAdicional = saborAdicional
  }
}
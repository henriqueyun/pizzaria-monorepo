import Produto from './Produto.mjs'

export default class Pizza extends Produto {
  constructor(nome, preco, imgURL, ingredientes) {
    super(nome, preco, imgURL)
    this.ingredientes = ingredientes
  }
}
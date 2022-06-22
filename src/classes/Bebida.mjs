import Produto from './Produto.mjs'

export default class Bebida extends Produto {
  constructor(nome, preco, imgURL, volume, alcoolica) {
    super(nome, preco, imgURL)
    this.volume = volume
    this.alcoolica = alcoolica
  }
}
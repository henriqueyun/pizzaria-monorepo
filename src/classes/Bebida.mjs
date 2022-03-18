import Produto from './Produto.mjs'

class Bebida extends Produto {
  constructor(nome, preco, imgURL, volume, alcoolica) {
    super(nome, preco, imgURL)
    this.volume = volume
    this.alcoolica = alcoolica
  }
}

export default Bebida
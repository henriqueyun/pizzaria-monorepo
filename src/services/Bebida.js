import Produto from './Produto'

class Bebida extends Produto {
  constructor(nome, preco, imagem, volume, alcoolica) {
    super(nome, preco, imagem)
    this.volume = volume
    this.acoolica = alcoolica
  }
}

module.exports = Bebida
class Bebida extends Produto {
  constructor({ nome, preco, imgURL, volume, alcoolica }) {
    super(nome, preco, imgURL)
    this._volume = volume
    this._alcoolica = alcoolica
  }
}
class Pedido {
  constructor(cliente, itensPedido, formaPagamento, dataEntrada, dataSaida, status, observacao) {
    this._cliente = cliente
    this._itensPedido = itensPedido
    this._formaPagamento = formaPagamento
    this._dataEntrada = dataEntrada
    this._dataSaida = dataSaida
    this._status = status
    this._observacao = observacao
  }
  
  adicionarItem (itemPedido) {
    const itensPedido = localStorage.getItem('itensPedido')
    itensPedido.push(itemPedido)
    localStorage.setItem('itensPedido', itensPedido)
  }
  
  editarItem(identificacaoItemPedido) {
    return identificacaoItemPedido
  }
  removerItem(identificacaoItemPedido) {
    return identificacaoItemPedido
  }
}
module.exports = Pedido
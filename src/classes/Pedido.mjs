class Pedido {
  constructor(nomeCliente, enderecoCliente, emailCliente, itensPedido, formaPagamento, status, observacao) {
    this.nomeCliente = nomeCliente
    this.enderecoCliente = enderecoCliente
    this.emailCliente = emailCliente
    this.itensPedido = itensPedido
    this.formaPagamento = formaPagamento
    this.status = status
    this.observacao = observacao
  }
}

export default Pedido
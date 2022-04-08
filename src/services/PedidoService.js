import axios from 'axios'

async function buscarTodosPorStatus () {
  const pedidosResponse = await axios.get(`${process.env.VUE_APP_API_URL}/pedido/all`)
  const pedidos = pedidosResponse.data
  const entrada = pedidos.filter(pedido => pedido.status == 'entrada')
  const confirmados = pedidos.filter(pedido => pedido.status == 'confirmado')
  const emPreparo = pedidos.filter(pedido => pedido.status == 'preparo')
  const expedidos = pedidos.filter(pedido => pedido.status == 'expedido')
  
  return { entrada, confirmados, emPreparo, expedidos }
}

async function atualizarStatusPedido (pedidoId, status) {
  const pedidoResponse = await axios.patch(`${process.env.VUE_APP_API_URL}/pedido/${pedidoId}`, { status })
  return pedidoResponse.status
}

export default { buscarTodosPorStatus, atualizarStatusPedido }
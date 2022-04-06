import axios from 'axios'

async function buscarTodosPorStatus () {
  const pedidosResponse = await axios.get(`${process.env.VUE_APP_API_URL}/pedido/all`)
  const pedidos = pedidosResponse.data
  const entrada = pedidos.filter(pedido => pedido.status == 'entrada')
  const confirmado = pedidos.filter(pedido => pedido.status == 'confirmado')
  const preparado = pedidos.filter(pedido => pedido.status == 'preparado')
  const expedido = pedidos.filter(pedido => pedido.status == 'expedido')
  
  return { entrada, confirmado, preparado, expedido }
}

export default { buscarTodosPorStatus }
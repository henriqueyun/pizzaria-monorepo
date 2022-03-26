import Pedido from '../classes/Pedido.mjs'
import PedidoModel from '../models/pedidoModel.mjs'
import PizzaItemPedidoModel from '../models/pizzaItemPedidoModel.mjs'
import logger from '../logger.mjs'

export async function cadastrar(req, res) {
  const { nomeCliente,
    enderecoCliente,
    emailCliente,
    formaPagamento,
    status,
    observacao } = req.body
  
  const { itensPedido } = req.body

  const pedido =
    new Pedido(nomeCliente,
      enderecoCliente,
      emailCliente,
      itensPedido,
      formaPagamento,
      status,
      observacao)
  
  const novoPedido = PedidoModel.build(pedido)

  await novoPedido.save()
    .catch(error => {
      logger.error(`Erro cadastrar pedido! ${error}`)
      return res.sendStatus(500)
    })
  itensPedido.pizzas.map(pizza => {
    pizza.pedidoId = novoPedido.id
    return pizza
  })
  
  itensPedido.pizzas.forEach(async (itemPizza) => {
    const novoItemPizza = PizzaItemPedidoModel.build(itemPizza)
    await novoItemPizza.save()
      .catch(error => {
        logger.error(`Erro cadastrar itemPizza! ${error}`)
        return res.sendStatus(500)
      })
  })

  return res.sendStatus(201).json({ id: novoPedido.id })
}

export async function atualizarStatus(req, res) {
  const pedido = await PedidoModel.findOne({ where: { id: req.params.id } })
    .catch(error => {
      logger.error('Erro buscar pedido', error)
      return res.sendStatus(500)
    })
  
  if (!pedido) {
    return res.sendStatus(404)
  }
  try {
    const { status } = req.body
    await pizza.update({ status })
    await pizza.save()
      .catch(error => {
        logger.error('Erro atualizar pedido', error)
      })
    return res.sendStatus(200)
  } catch (error) {
    logger.error(error)
    return res.sendStatus(500)
  }
}

export async function buscar(req, res) {
  const pedido = await PedidoModel.findOne({ where: { id: req.params.id } })
    .catch(error => {
      logger.error('Erro buscar pedido!', error)
      return res.sendStatus(500)
    })
  if (!pedido) {
    return res.status(404).send('Pizza not found')
  }
  return res.status(200).json(pedido)
}

export async function buscarTodos() {
  const pedidos = await PedidoModel.findAll()
    .catch(error => {
      logger.error('Erro buscar pedido')
      return res.sendStatus(500)
    })
  if (!pedidos.length) {
    return res.sendStatus(404)
  }
  return res.status(200).json(pedidos)
}

const pedidoController = { cadastrar, atualizarStatus, buscar, buscarTodos }
export default pedidoController
import Pedido from '../classes/Pedido.mjs'
import PedidoModel from '../models/pedidoModel.mjs'
import PizzaItemPedidoModel from '../models/pizzaItemPedidoModel.mjs'
import BebidaItemPedidoModel from '../models/bebidaItemPedidoModel.mjs'
import PizzaModel from '../models/pizzaModel.mjs'

import logger from '../logger.mjs'

export async function cadastrar(req, res) {
  const { nomeCliente,
    enderecoCliente,
    emailCliente,
    formaPagamento,
    observacao } = req.body
  
  const status = 'entrada'
  
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

  try {
    cadastrarItensPizza(pedido.itensPedido.pizzas, novoPedido.id)
    cadastrarItensBebida(pedido.itensPedido.bebidas, novoPedido.id)
  } catch (error) {
    return res.sendStatus(500)
  }

  return res.status(201).json({ id: novoPedido.id })
}

async function cadastrarItensPizza(pizzas, pedidoId) {
  pizzas.map(pizza => {
    pizza.pedidoId = pedidoId
    return pizza
  })  
  
  pizzas.forEach(async (itemPizza) => {
    const novoItemPizza = PizzaItemPedidoModel.build(itemPizza)
    await novoItemPizza.save()
      .catch(error => {
        return Promise.reject(`Erro ao cadastrar item pizza ${error}`)
      })
  })
}

function cadastrarItensBebida(bebidas, pedidoId) {
  bebidas.map(bebida => {
    bebida.pedidoId = pedidoId
    return bebida
  })  
  
  bebidas.forEach(async (itemBebida) => {
    const novoItemBebida = BebidaItemPedidoModel.build(itemBebida)
    console.log(novoItemBebida)
    await novoItemBebida.save()
      .catch(error => {
        return Promise.reject(`Erro ao cadastrar item bebida ${error}`)
      })
  })
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

export async function buscarTodos(req, res) {

  const pedidos = await PedidoModel.findAll({
    include: [
      {
        model: PizzaItemPedidoModel,
        include: [{
          model: PizzaModel   
        }]
      }
    ]
  }).catch(error => {
      logger.error(`Erro buscar pedido ${error}`)
      return res.sendStatus(500)
    })

  pedidos.forEach(pedido => {
    console.log(`pedido ${JSON.stringify(pedido)}`)
  })

  if (!pedidos.length) {
    logger.error('Pedido not found')
    return res.sendStatus(404)
  }

  return res.status(200).json(pedidos)
}

const pedidoController = { cadastrar, atualizarStatus, buscar, buscarTodos }
export default pedidoController
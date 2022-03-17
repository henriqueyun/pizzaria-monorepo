import ProdutoModel from '../models/produtoModel.mjs'
import Pizza from '../classes/Pizza.mjs'

export async function cadastrar(req, res) {
  const { nome, preco, imgURL, ingredientes, saborAdicional } = req.body

  const pizza = new Pizza(nome, preco, imgURL, ingredientes, saborAdicional)
  const novaPizza = ProdutoModel.build(pizza)
  
  await novaPizza.save()
    .catch(error => {
        console.log('Erro na função cadastrar pizza!', error)
        return res.sendStatus(500)
    })
  return res.sendStatus(201)
}

export async function editar(req, res) {
  const pizza = await ProdutoModel.findOne({ where: { id: req.params.id } })
    .catch(error => {
        console.log('Erro buscar pizza!', error)
        return res.sendStatus(500)
    })
  if (!pizza) {
    return res.sendStatus(404)
  }
  try {
    const pizzaNovosDados = req.body
    await pizza.update(pizzaNovosDados)
    await pizza.save()
      .catch(error => {
        console.log('Erro na função editar pizza!', error)
        return res.sendStatus(500)
      })
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export async function excluir(req, res) {
  const idPizza = req.params.id
  await ProdutoModel.destroy({ where: { id: idPizza } })
      .catch(error => {
        console.log('Erro na função excluir pizza!', error)
        return res.sendStatus(500)
      })
  res.sendStatus(200)
}

export function buscar(req, res) {
  
}

const pizzaController = { cadastrar, editar, excluir, buscar }
export default pizzaController
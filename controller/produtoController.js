const produtoModel = require('../models/produtoModel')

function cadastrar(req, res) {
  // produtoModel.cadastrar()
  res.send('cadastrar return')
}

function editar(req, res) {
  // produtoModel.editar()
  res.send('editar return')
}

function excluir(req, res) {
  // produtoModel.excluir()
  res.send('excluir return')
}

function buscar(req, res) {
  // produtoModel.buscar()
  res.send('buscar return')
}
  
module.exports = { cadastrar, editar, excluir, buscar }
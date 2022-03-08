const ingredienteModel = require('../models/ingredienteModel')

function cadastrar(req, res) {
  // ingredienteModel.cadastrar()
  res.send('cadastrar return')
}

function editar(req, res) {
  // ingredienteModel.editar()
  res.send('editar return')
}

function excluir(req, res) {
  // ingredienteModel.excluir()
  res.send('excluir return')
}

function buscar(req, res) {
  // ingredienteModel.buscar()
  res.send('buscar return')
}
  
module.exports = { cadastrar, editar, excluir, buscar }
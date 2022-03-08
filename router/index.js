const controller = require('../controller')
const router = require('express').Router()

router.get('/produto', controller.produtoController.buscar)
router.post('/produto', controller.produtoController.cadastrar)
router.delete('/produto', controller.produtoController.excluir)
router.put('/produto', controller.produtoController.editar)

router.get('/ingrediente', controller.ingredienteController.buscar)
router.post('/ingrediente', controller.ingredienteController.cadastrar)
router.delete('/ingrediente', controller.ingredienteController.excluir)
router.put('/ingrediente', controller.ingredienteController.editar)

module.exports = router
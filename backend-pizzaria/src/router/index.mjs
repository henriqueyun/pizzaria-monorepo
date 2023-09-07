import { Router } from 'express'
import controller from '../controller/index.mjs'

const router = Router()

router.post('/pizza', controller.pizzaController.cadastrar)
router.get('/pizza/all', controller.pizzaController.buscarTodas)
router.get('/pizza/:id', controller.pizzaController.buscar)
router.put('/pizza/:id', controller.pizzaController.editar)
router.delete('/pizza/:id', controller.pizzaController.excluir)

router.post('/bebida', controller.bebidaController.cadastrar)
router.get('/bebida/all', controller.bebidaController.buscarTodas)
router.get('/bebida/:id', controller.bebidaController.buscar)
router.put('/bebida/:id', controller.bebidaController.editar)
router.delete('/bebida/:id', controller.bebidaController.excluir)

router.post('/pedido', controller.pedidoController.cadastrar)
router.get('/pedido/all', controller.pedidoController.buscarTodos)
router.get('/pedido/:id', controller.pedidoController.buscar)
router.patch('/pedido/:id', controller.pedidoController.atualizarStatus)

router.post('/auth/login', controller.authController.login)
router.post('/auth/authorize', controller.authController.authorize)
router.post('/auth/logout', controller.authController.logout)

router.get('/health', (req, res) => {
  res.send('Health Ok!')
})
export default router
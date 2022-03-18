import { Router } from 'express'
import controller from '../controller/index.mjs'

const router = Router()

router.post('/pizza', controller.pizzaController.cadastrar)
router.get('/pizza/:id', controller.pizzaController.buscar)
router.put('/pizza/:id', controller.pizzaController.editar)
router.delete('/pizza/:id', controller.pizzaController.excluir)

router.post('/bebida', controller.bebidaController.cadastrar)
router.get('/bebida/:id', controller.bebidaController.buscar)
router.put('/bebida/:id', controller.bebidaController.editar)
router.delete('/bebida/:id', controller.bebidaController.excluir)

export default router
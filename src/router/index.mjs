import { Router } from 'express'
import controller from '../controller/index.mjs'

const router = Router()

router.post('/pizza', controller.pizzaController.cadastrar)
router.get('/pizza', controller.pizzaController.buscar)
router.put('/pizza/:id', controller.pizzaController.editar)
router.delete('/pizza/:id', controller.pizzaController.excluir)

export default router
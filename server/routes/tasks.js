import express from 'express'
import * as tasksControllers from '../controllers/taskController.js'
import { AuthMiddleware } from '../middleware/auth.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/tasks
router.post('/', AuthMiddleware, [
  check('name', 'El nombre de la tarea es requerido').not().isEmpty()
], tasksControllers.createTask)

router.get('/', AuthMiddleware, tasksControllers.getTasks)

router.put('/:id', AuthMiddleware, [
  check('name', 'El nombre de la tarea es requerido').not().isEmpty()
], tasksControllers.updateTask)

router.delete('/:id', AuthMiddleware, tasksControllers.deleteTask)

export default router

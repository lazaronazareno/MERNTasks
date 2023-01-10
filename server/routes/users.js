import express from 'express'
import * as userControllers from '../controllers/userController.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/users
router.post('/', [
  check('name', 'El nombre es Obligatorio').not().isEmpty(),
  check('email', 'Agrega un email valido').isEmail(),
  check('password', 'El password debe tener 6 characteres').isLength({ min: 6 })
], userControllers.createUser)

export default router

import express from 'express'
import * as authControllers from '../controllers/authController.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/auth
router.post('/', [
  check('email', 'Agrega un email valido').isEmail(),
  check('password', 'El password debe tener 6 characteres').isLength({ min: 6 })
], authControllers.authUser)

export default router

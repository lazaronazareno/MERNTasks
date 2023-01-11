import express from 'express'
import * as authControllers from '../controllers/authController.js'
import { AuthMiddleware } from '../middleware/auth.js'

const router = express.Router()

// /api/auth
router.post('/', authControllers.authUser)

router.get('/',
  AuthMiddleware, authControllers.getAuthUser
)

export default router

import User from '../models/User.js'
import bcryptjs from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
  // errores from check
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body
  try {
    // buscar usuarios repetidos
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' })
    }

    // crear nuevo usuario
    user = new User(req.body)

    // hashea contraseña
    const salt = await bcryptjs.genSalt(10)
    user.password = await bcryptjs.hash(password, salt)

    // guarda usuario
    await user.save()

    // crear y firmar jwt
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600
    }, (error, token) => {
      if (error) throw error

      res.json({ token })
    })
  } catch (error) {
    console.log(error)
    res.status(400).send('Hubo un error')
  }
}

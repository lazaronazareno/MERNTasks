import User from '../models/User.js'
import bcryptjs from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export const authUser = async (req, res) => {
  // errores from check
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body

  try {
    // buscar usuario registrado
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ msg: 'El usuario no existe' })
    }

    // compara contraseñas
    const correctPass = await bcryptjs.compare(password, user.password)
    if (!correctPass) {
      return res.status(400).json({ msg: 'Password incorrecto' })
    }

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
  }
}

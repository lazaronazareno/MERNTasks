import jwt from 'jsonwebtoken'

export function AuthMiddleware (req, res, next) {
  const token = req.header('x-auth-token')

  if (!token) {
    res.status(401).json({ msg: 'No autorizado. No hay token ' })
  }

  try {
    const crypt = jwt.verify(token, process.env.SECRET)

    req.user = crypt.user

    next()
  } catch (error) {
    res.status(401).json({ msg: 'Token no valido' })
  }
}

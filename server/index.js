import express from 'express'
import { conn } from './config/db.js'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const app = express()

conn()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`el server funciona en el PORT : ${PORT}`)
})

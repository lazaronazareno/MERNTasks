import express from 'express'
import { conn } from './config/db.js'
import cors from 'cors'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import projectsRouter from './routes/projects.js'
import tasksRouter from './routes/tasks.js'

const app = express()

conn()

app.use(cors())

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/tasks', tasksRouter)

app.listen(PORT, () => {
  console.log(`el server funciona en el PORT : ${PORT}`)
})

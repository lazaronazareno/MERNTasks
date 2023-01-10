import Task from '../models/Task.js'
import Project from '../models/Project.js'
import { validationResult } from 'express-validator'

export const createTask = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { project } = req.body
    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    const task = new Task(req.body)

    task.save()
    res.json(task)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const getTasks = async (req, res) => {
  try {
    const { project } = req.body
    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    const tasks = await Task.find({ project })
    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const updateTask = async (req, res) => {
  try {
    const { project, name, checked } = req.body

    let task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(404).json({ msg: 'Tarea inexistente' })
    }

    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    const newTask = {}

    if (name) newTask.name = name

    if (checked) newTask.checked = checked

    task = await Task.findByIdAndUpdate({ _id: req.params.id }, newTask, { new: true })

    res.json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { project } = req.body

    const task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(404).json({ msg: 'Tarea inexistente' })
    }

    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    await Task.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: 'Tarea eliminada' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}

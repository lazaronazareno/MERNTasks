import Project from '../models/Project.js'
import { validationResult } from 'express-validator'

export const createProject = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const project = new Project(req.body)

    project.user = req.user.id

    project.save()
    res.json(project)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id })

    res.json(projects)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const updateProject = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { name } = req.body
  const newProject = {}

  if (name) {
    newProject.name = name
  }

  try {
    let project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true })

    res.json({ project })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    await Project.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: 'Proyecto eliminado' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

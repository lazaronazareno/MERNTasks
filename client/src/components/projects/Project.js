import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {
  const projectsContext = useContext(ProjectContext)
  const { setCurrentProject } = projectsContext

  const tasksContext = useContext(TaskContext)
  const { getTasksByProject } = tasksContext

  const setProject = (id) => {
    setCurrentProject(id)

    getTasksByProject(id)
  }

  return (
    <li className='d-flex'>
      <button
        className='btn btn-link'
        onClick={() => setProject(project.id)}
      >{project.name}
      </button>
    </li>
  )
}

export default Project

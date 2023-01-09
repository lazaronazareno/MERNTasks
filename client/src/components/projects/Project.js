import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'

const Project = ({ project }) => {
  const projectsContext = useContext(ProjectContext)
  const { setCurrentProject } = projectsContext

  return (
    <li className='d-flex'>
      <button
        className='btn btn-link'
        onClick={() => setCurrentProject(project.id)}
      >{project.name}
      </button>
    </li>
  )
}

export default Project

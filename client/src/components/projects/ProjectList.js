import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext'

const ProjectList = () => {
  const projectsContext = useContext(ProjectContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    getProjects()
  }, [])

  if (projects.length === 0) return <p>No hay projectos, comienza creando uno.</p>

  return (
    <ul>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectList

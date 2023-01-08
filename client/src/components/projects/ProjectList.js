import React from 'react'
import Project from './Project'

const ProjectList = () => {
  const projects = [
    { name: 'Tienda' },
    { name: 'Internet' },
    { name: 'Diseño Portfolio' }
  ]
  return (
    <ul>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectList

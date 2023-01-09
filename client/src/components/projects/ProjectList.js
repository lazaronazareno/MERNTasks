import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectList = () => {
  const projectsContext = useContext(ProjectContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    getProjects()
  }, [])

  if (projects.length === 0) return <p>No hay projectos, comienza creando uno.</p>

  return (
    <TransitionGroup>
      {projects.map(project => (
        <CSSTransition
          key={project.id}
          timeout={200}
          classNames='project'
        >
          <Project project={project} />
        </CSSTransition>
      ))}

    </TransitionGroup>
  )
}

export default ProjectList

import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext'
import AlertContext from '../../context/alert/alertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectList = () => {
  const projectsContext = useContext(ProjectContext)
  const { projects, error, getProjects } = projectsContext

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  useEffect(() => {
    if (error) {
      showAlert(error.msg, error.category)
    }
    getProjects()
  }, [error])

  if (projects.length === 0) return <p>No hay projectos, comienza creando uno.</p>

  return (
    <>
      {
        alert
          ? (
            <div className={`alert ${alert.category}`}>
              {alert.msg}
            </div>
            )
          : null
      }
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition
            key={project._id}
            timeout={200}
            classNames='project'
          >
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default ProjectList

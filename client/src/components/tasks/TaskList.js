import React, { useContext, useEffect } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'
import AlertContext from '../../context/alert/alertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TaskList = () => {
  const projectsContext = useContext(ProjectContext)
  const { currentProject, deleteProject } = projectsContext

  const tasksContext = useContext(TaskContext)
  const { tasksByProject, error } = tasksContext

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  useEffect(() => {
    if (error) {
      showAlert(error.msg, error.category)
    }
  }, [error])

  if (!currentProject) return <h1 className='p-3'>Selecciona un Proyecto</h1>

  const [current] = currentProject

  const handleDelete = () => {
    deleteProject(current._id)
  }
  return (
    <>
      <h1 className='p-3'> Proyectos : {current.name}</h1>
      {
        alert
          ? (
            <div className={`error-alert ${alert.category}`}>
              {alert.msg}
            </div>
            )
          : null
      }
      <>
        {tasksByProject.length === 0
          ? <p className='d-flex w-75 p-3 bg-light gap-2 align-items-center'>No hay tareas</p>
          : (
            <TransitionGroup
              className='d-flex flex-column w-75 gap-2 m-4'
            >
              {
                tasksByProject.map(task => (
                  <CSSTransition
                    key={task._id}
                    timeout={200}
                    classNames='task'
                  >
                    <Task task={task} />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
            )}
      </>

      <button
        type='button'
        className='btn btn-dark d-flex align-self-start m-4'
        onClick={handleDelete}
      >Eliminar Proyecto &times;
      </button>
    </>
  )
}

export default TaskList

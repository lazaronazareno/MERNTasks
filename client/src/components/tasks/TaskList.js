import React, { useContext } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TaskList = () => {
  const projectsContext = useContext(ProjectContext)
  const { currentProject, deleteProject } = projectsContext

  const tasksContext = useContext(TaskContext)
  const { tasksByProject } = tasksContext

  if (!currentProject) return <h1 className='p-3'>Selecciona un Proyecto</h1>

  const [current] = currentProject

  const handleDelete = () => {
    deleteProject(current.id)
  }
  return (
    <>
      <h1 className='p-3'> Proyectos : {current.name}</h1>
      <>
        {tasksByProject.length === 0
          ? <p className='d-flex p-3  bg-light gap-2 align-items-center'>No hay tareas</p>
          : (
            <TransitionGroup
              className='d-flex flex-column w-75 gap-2 m-4'
            >
              {
                tasksByProject.map(task => (
                  <CSSTransition
                    key={task.id}
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

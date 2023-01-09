import React, { useContext } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/projectContext'

const TaskList = () => {
  const projectsContext = useContext(ProjectContext)
  const { currentProject, deleteProject } = projectsContext

  if (!currentProject) return <h1 className='p-3'>Selecciona un Proyecto</h1>

  const [current] = currentProject

  const tasks = [
    { name: 'Elegir ...', checked: true },
    { name: 'Probar ...', checked: false },
    { name: 'Diseño ...', checked: false },
    { name: 'Host ...', checked: true }
  ]

  const handleDelete = () => {
    deleteProject(current.id)
  }
  return (
    <>
      <h1 className='p-3'> Proyectos : {current.name}</h1>
      <div className='d-flex flex-column w-75 gap-2 m-4'>
        {tasks.length === 0
          ? <p>No hay tareas</p>
          : (
              tasks.map(task => (
                <Task key={task.id} task={task} />
              ))
            )}
      </div>

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

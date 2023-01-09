import React from 'react'
import Task from './Task'

const TaskList = () => {
  const tasks = [
    { name: 'Elegir ...', checked: true },
    { name: 'Probar ...', checked: false },
    { name: 'Diseño ...', checked: false },
    { name: 'Host ...', checked: true }
  ]
  return (
    <>
      <h1 className='p-3'> Proyectos : Tienda</h1>
      <div className='d-flex flex-column w-75 gap-2 m-4'>
        {tasks.length === 0
          ? <p>No hay tareas</p>
          : (
              tasks.map(task => (
                <Task key={task.id} task={task} />
              ))
            )}
      </div>

      <button type='button' className='btn btn-dark d-flex align-self-start m-4'>Eliminar Proyecto &times;</button>
    </>
  )
}

export default TaskList

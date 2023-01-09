import React from 'react'

const Task = ({ task }) => {
  return (
    <div className='d-flex p-3  bg-light gap-2 align-items-center'>
      <p className='m-0 fs-4 me-auto'>{task.name}</p>
      <>
        {task.checked
          ? <button className='alert m-0 p-1 alert-success'>Completo</button>
          : <button className='alert m-0 p-1 alert-danger'>Incompleto</button>}
      </>

      <div className='d-flex gap-2'>
        <button className='btn btn-dark p-1'>Editar</button>
        <button className='btn btn-secondary p-1'>Eliminar</button>
      </div>
    </div>
  )
}

export default Task

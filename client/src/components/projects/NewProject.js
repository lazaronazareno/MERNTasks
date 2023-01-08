import React, { useState } from 'react'

const NewProject = () => {
  const [project, setProject] = useState({
    name: ''
  })

  const { name } = project

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (project.trim() === '') return
    console.log(project)
  }

  return (
    <>
      <button
        className='btn btn-lg btn-primary'
      >
        Nuevo Proyecto
      </button>

      <form
        className='d-flex flex-column'
        onSubmit={onSubmit}
      >
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder=' '
            name='name'
            value={name}
            onChange={onChange}
          />
          <label htmlFor='name'>Nombre Proyecto</label>
        </div>

        <button
          type='submit'
          className='btn btn-lg btn-primary'
        >Agregar proyecto
        </button>
      </form>
    </>
  )
}

export default NewProject

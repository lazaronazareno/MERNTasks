import React, { useState, useContext } from 'react'

import ProjectContext from '../../context/projects/projectContext'

const NewProject = () => {
  const projectsContext = useContext(ProjectContext)

  const { form, showForm } = projectsContext

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

  const handleForm = () => {
    showForm()
  }

  return (
    <>
      <button
        onClick={handleForm}
        className='btn btn-lg btn-primary'
      >
        {form ? 'Cancelar' : 'Nuevo Proyecto'}
      </button>

      {form
        ? (
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
          )
        : (
            null
          )}
    </>
  )
}

export default NewProject

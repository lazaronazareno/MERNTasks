import React, { useContext, useState } from 'react'
import ProjectContext from '../../context/projects/projectContext'

const NewTask = () => {
  const [project, setProject] = useState({
    name: ''
  })

  const { name } = project

  const projectsContext = useContext(ProjectContext)
  const { currentProject } = projectsContext

  if (!currentProject) return null

  const [current] = currentProject

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
    <div className='p-3'>
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
          <label htmlFor='name'>Nombre Tarea</label>
        </div>

        <button
          type='submit'
          className='btn btn-lg btn-primary'
        >Agregar tarea
        </button>
      </form>
    </div>
  )
}

export default NewTask

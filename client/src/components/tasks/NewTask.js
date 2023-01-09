import React, { useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const NewTask = () => {
  const [task, setTask] = useState({
    name: ''
  })

  const { name } = task

  const projectsContext = useContext(ProjectContext)
  const { currentProject } = projectsContext

  const tasksContext = useContext(TaskContext)
  const { errorForm, currentTask, addTask, showError, getTasksByProject, editTask } = tasksContext

  useEffect(() => {
    currentTask !== null
      ? setTask(currentTask)
      : setTask({
        name: ''
      })
  }, [currentTask])

  if (!currentProject) return null

  const [current] = currentProject

  const onChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '') {
      showError()
      return
    }

    if (!currentTask) {
      task.projectId = current.id
      task.checked = false
      addTask(task)
    } else {
      editTask(task)
    }

    getTasksByProject(current.id)

    setTask({
      name: ''
    })
  }

  return (
    <div>
      <form
        className='d-flex flex-column p-3'
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
        >{currentTask ? 'Editar Tarea' : 'Agregar Tarea'}
        </button>
      </form>
      {errorForm ? <p className='alert alert-danger mx-3'>El nombre de la tarea es obligatorio</p> : null}
    </div>
  )
}

export default NewTask

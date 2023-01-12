import React, { useContext } from 'react'
import TaskContext from '../../context/tasks/taskContext'
import ProjectContext from '../../context/projects/projectContext'

const Task = ({ task }) => {
  const tasksContext = useContext(TaskContext)
  const { deleteTask, getTasksByProject, setCurrentTask, editTask } = tasksContext

  const projectsContext = useContext(ProjectContext)
  const { currentProject } = projectsContext

  const [project] = currentProject

  const handleDelete = (id) => {
    deleteTask(id, project._id)
    getTasksByProject(project.id)
  }

  const handleChange = (task) => {
    task.checked = !task.checked

    editTask(task)
  }

  const handleEdit = (task) => {
    setCurrentTask(task)
  }

  return (
    <div className='d-flex p-3  bg-light gap-2 align-items-center'>
      <p className='m-0 fs-4 me-auto'>{task.name}</p>
      <>
        {task.checked
          ? <button onClick={() => handleChange(task)} className='alert m-0 p-1 alert-success'>Completo</button>
          : <button onClick={() => handleChange(task)} className='alert m-0 p-1 alert-danger'>Incompleto</button>}
      </>

      <div className='d-flex gap-2'>
        <button
          className='btn btn-dark p-1'
          onClick={() => handleEdit(task)}
        >Editar
        </button>
        <button
          className='btn btn-secondary p-1'
          onClick={() => handleDelete(task._id)}
        >Eliminar
        </button>
      </div>
    </div>
  )
}

export default Task

import { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import {
  PROJECT_TASKS,
  ADD_TASK,
  CHECK_TASKFORM,
  DELETE_TASK,
  CHECK_TASK,
  CURRENT_TASK,
  EDIT_TASK
} from '../../types'

const TaskState = (props) => {
  const tasks = [
    { id: 1, name: 'Elegir ...', checked: true, projectId: 1 },
    { id: 2, name: 'Probar ...', checked: false, projectId: 2 },
    { id: 3, name: 'Diseño ...', checked: false, projectId: 3 },
    { id: 4, name: 'Host ...', checked: true, projectId: 4 },
    { id: 5, name: 'Elegir ...', checked: true, projectId: 2 },
    { id: 6, name: 'Probar ...', checked: false, projectId: 4 },
    { id: 7, name: 'Diseño ...', checked: false, projectId: 1 },
    { id: 8, name: 'Host ...', checked: true, projectId: 3 }
  ]

  const initialState = {
    tasks,
    tasksByProject: null,
    errorForm: false,
    currentTask: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasksByProject = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  const addTask = (task) => {
    task.id = crypto.randomUUID()
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  const showError = () => {
    dispatch({
      type: CHECK_TASKFORM
    })
  }

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  }

  const handleChecked = (task) => {
    dispatch({
      type: CHECK_TASK,
      payload: task
    })
  }

  const setCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  const editTask = (task) => {
    dispatch({
      type: EDIT_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksByProject: state.tasksByProject,
        errorForm: state.errorForm,
        currentTask: state.currentTask,
        getTasksByProject,
        addTask,
        showError,
        deleteTask,
        handleChecked,
        setCurrentTask,
        editTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState

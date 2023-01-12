import { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import {
  PROJECT_TASKS,
  ADD_TASK,
  CHECK_TASKFORM,
  DELETE_TASK,
  CURRENT_TASK,
  EDIT_TASK,
  ERROR_TASK
} from '../../types'
import clientAxios from '../../config/axios'

const TaskState = (props) => {
  const initialState = {
    tasksByProject: [],
    errorForm: false,
    currentTask: null,
    error: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasksByProject = async (project) => {
    try {
      const response = await clientAxios.get('/api/tasks', { params: { project } })

      dispatch({
        type: PROJECT_TASKS,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_TASK,
        payload: alert
      })
    }
  }

  const addTask = async (task) => {
    try {
      const response = await clientAxios.post('/api/tasks', task)
      dispatch({
        type: ADD_TASK,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_TASK,
        payload: alert
      })
    }
  }

  const showError = () => {
    dispatch({
      type: CHECK_TASKFORM
    })
  }

  const deleteTask = async (taskId, project) => {
    try {
      await clientAxios.delete(`/api/tasks/${taskId}`, { params: { project } })
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_TASK,
        payload: alert
      })
    }
  }

  const setCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  const editTask = async (task) => {
    try {
      const response = await clientAxios.put(`/api/tasks/${task._id}`, task)

      dispatch({
        type: EDIT_TASK,
        payload: response.data.task
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_TASK,
        payload: alert
      })
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasksByProject: state.tasksByProject,
        errorForm: state.errorForm,
        currentTask: state.currentTask,
        getTasksByProject,
        addTask,
        showError,
        deleteTask,
        setCurrentTask,
        editTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState

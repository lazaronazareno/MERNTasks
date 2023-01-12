import {
  ADD_TASK,
  CHECK_TASKFORM,
  PROJECT_TASKS,
  DELETE_TASK,
  CURRENT_TASK,
  EDIT_TASK,
  ERROR_TASK
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        tasksByProject: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasksByProject: [action.payload, ...state.tasksByProject],
        errorForm: false
      }
    case CHECK_TASKFORM:
      return {
        ...state,
        errorForm: true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasksByProject: state.tasksByProject.filter(task => task._id !== action.payload)
      }
    case EDIT_TASK:
      return {
        ...state,
        tasksByProject: state.tasksByProject.map(task => task._id === action.payload._id ? action.payload : task),
        currentTask: null
      }
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload
      }
    case ERROR_TASK:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

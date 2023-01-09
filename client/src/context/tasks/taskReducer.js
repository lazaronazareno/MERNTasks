import {
  ADD_TASK,
  CHECK_TASKFORM,
  PROJECT_TASKS,
  DELETE_TASK,
  CHECK_TASK,
  CURRENT_TASK,
  EDIT_TASK
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        tasksByProject: state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case EDIT_TASK:
    case CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
        currentTask: null
      }
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload
      }

    default:
      return state
  }
}

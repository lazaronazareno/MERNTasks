import { useReducer } from 'react'
import { ADD_PROJECT, FORM_PROJECT, GET_PROJECTS, CHECK_FORM, CURRENT_PROJECT, DELETE_PROJECT } from '../../types'
import ProyectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = props => {
  const projects = [
    { id: 1, name: 'Tienda' },
    { id: 2, name: 'Internet' },
    { id: 3, name: 'Diseño Portfolio' }
  ]

  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    currentProject: null
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  const addProject = (project) => {
    project.id = crypto.randomUUID()

    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  const showError = () => {
    dispatch({
      type: CHECK_FORM
    })
  }

  const setCurrentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <ProyectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        currentProject: state.currentProject,
        showForm,
        getProjects,
        addProject,
        showError,
        setCurrentProject,
        deleteProject
      }}
    >
      {props.children}
    </ProyectContext.Provider>
  )
}

export default ProjectState

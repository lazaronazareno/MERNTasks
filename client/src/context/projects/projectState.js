import { useReducer } from 'react'
import { FORM_PROJECT } from '../../types'
import ProyectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = props => {
  const initialState = {
    form: false
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  return (
    <ProyectContext.Provider
      value={{
        form: state.form,
        showForm
      }}
    >
      {props.children}
    </ProyectContext.Provider>
  )
}

export default ProjectState

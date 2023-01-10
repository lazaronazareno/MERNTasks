import React, { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../../types'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'

const AlertState = props => {
  const initialState = {
    alert: null
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category
      }
    })

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      })
    }, 5000)
  }
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState

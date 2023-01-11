import React, { useReducer } from 'react'
import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  HANDLE_LOGOUT
} from '../../types'
import AuthReducer from './authReducer'
import AuthContext from './authContext'
import clientAxios from '../../config/axios'
import { tokenAuth } from '../../config/tokenAuth'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    user: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const registerUser = async (values) => {
    try {
      const response = await clientAxios.post('/api/users/', values)

      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data
      })

      getUser(response.data.token)
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'error'
      }

      dispatch({
        type: ERROR_REGISTER,
        payload: alert
      })
    }
  }

  const getUser = async (token) => {
    if (token) {
      tokenAuth(token)
    }

    try {
      const response = await clientAxios.get('/api/auth')

      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
    } catch (error) {
      console.log(error)

      dispatch({
        type: ERROR_LOGIN
      })
    }
  }

  const login = async (values) => {
    try {
      const response = await clientAxios.post('/api/auth/', values)

      dispatch({
        type: SUCCESS_LOGIN,
        payload: response.data
      })

      getUser(response.data.token)
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'error'
      }

      dispatch({
        type: ERROR_LOGIN,
        payload: alert
      })
    }
  }

  const logout = () => {
    dispatch({
      type: HANDLE_LOGOUT
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        user: state.user,
        error: state.error,
        loading: state.loading,
        registerUser,
        login,
        getUser,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState

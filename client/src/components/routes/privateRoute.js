import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import useToken from '../../hooks/useToken'

const PrivateRoute = () => {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const { isAuth, loading, getUser } = authContext

  useEffect(() => {
    getUser(token)
  }, [])

  return (
    <>
      {
        !isAuth && !loading
          ? (<Navigate to='/' />)
          : (<Outlet />)
      }
    </>
  )
}

export default PrivateRoute

import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PrivateRoute = () => {
  const authContext = useContext(AuthContext)
  const { isAuth, loading, getUser } = authContext

  useEffect(() => {
    const token = localStorage.getItem('token')
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

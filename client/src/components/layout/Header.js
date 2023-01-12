import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import useToken from '../../hooks/useToken'

const Header = () => {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const { user, getUser, logout } = authContext

  useEffect(() => {
    getUser(token)
  }, [])
  return (
    <header className='container-fluid w-100 p-3 bg-info d-flex justify-content-between'>
      {
        user
          ? <p className='fs-3'>Hola <span>{user.name}</span></p>
          : null
      }
      <nav>
        <button
          className='btn btn-link'
          onClick={() => logout()}
        >Cerrar Sesion
        </button>
      </nav>
    </header>
  )
}

export default Header

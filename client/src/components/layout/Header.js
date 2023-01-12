import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import useToken from '../../hooks/useToken'
import menu from '../../assets/menu.png'

const Header = ({ toggleNav }) => {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const { user, getUser, logout } = authContext

  useEffect(() => {
    getUser(token)
  }, [])
  return (
    <header className='header w-100 p-3 text-white d-flex justify-content-between'>
      {
        user
          ? (
            <div className='d-flex align-items-center'>
              <img
                src={menu}
                alt='menu-icon Hamburger icons created by azmianshori - Flaticon'
                className='menu-icon'
                onClick={toggleNav}
              />
              <h1 className='m-0 fs-3'>Hola <span>{user.name}</span></h1>
            </div>
            )
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

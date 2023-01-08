import React from 'react'

const Header = () => {
  return (
    <header className='container-fluid w-100 p-3 bg-info d-flex justify-content-between'>
      <p className='fs-3'>Hola <span>Usuario</span></p>

      <nav>
        <a className='btn btn-link' href='#!'>Cerrar Sesion</a>
      </nav>
    </header>
  )
}

export default Header

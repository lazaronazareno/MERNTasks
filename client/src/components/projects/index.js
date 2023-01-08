import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'

const Projects = () => {
  return (
    <div className='d-flex bg-secondary vh-100'>
      <Sidebar />

      <div className='container-fluid p-0'>
        <Header />

        <main>
          <h1 className='text-white'>Contenedor principal</h1>
        </main>
      </div>

    </div>
  )
}

export default Projects

import React from 'react'
import ProjectList from '../projects/ProjectList'
import NewProject from '../projects/NewProject'

const Sidebar = () => {
  return (
    <aside className='d-flex flex-column p-4 vh-100 w-50 bg-light text-center gap-5'>
      <h1>Mern Tasks</h1>

      <NewProject />

      <div>
        <h2>Proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  )
}

export default Sidebar

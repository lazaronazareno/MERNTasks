import React from 'react'
import ProjectList from '../projects/ProjectList'
import NewProject from '../projects/NewProject'
import close from '../../assets/close.png'

const Sidebar = ({ navOpen, toggleNav }) => {
  return (
    <aside className={`sidebar p-4 vh-100 bg-light text-center gap-5 ${navOpen ? 'active' : ''}`}>
      <img
        src={close}
        alt='close-icon Close icons created by joalfa - Flaticon'
        className='sidebar__close-icon'
        onClick={toggleNav}
      />
      <h1 className='mt-4'>Mern Tasks</h1>

      <NewProject />

      <div>
        <h2>Proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  )
}

export default Sidebar

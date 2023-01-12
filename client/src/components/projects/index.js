import React, { useContext, useEffect, useState } from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import NewTask from '../tasks/NewTask'
import TaskList from '../tasks/TaskList'
import AuthContext from '../../context/auth/authContext'
import useToken from '../../hooks/useToken'

const Projects = () => {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const { getUser } = authContext

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    getUser(token)
  }, [])

  return (
    <div className='bg-secondary dashboard'>
      <Sidebar navOpen={navOpen} toggleNav={toggleNav} />

      <Header toggleNav={toggleNav} />

      <main>
        <NewTask />
        <div className='d-flex flex-column align-items-center'>
          <TaskList />
        </div>
      </main>

    </div>
  )
}

export default Projects

import React, { useContext, useEffect } from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import NewTask from '../tasks/NewTask'
import TaskList from '../tasks/TaskList'
import AuthContext from '../../context/auth/authContext'

const Projects = () => {
  const token = localStorage.getItem('token')

  const authContext = useContext(AuthContext)
  const { getUser } = authContext

  useEffect(() => {
    getUser(token)
  }, [])

  return (
    <div className='d-flex bg-secondary'>
      <Sidebar />

      <div className='container-fluid p-0 vh-100'>
        <Header />

        <main className='d-flex flex-column bg-dark'>
          <NewTask />
          <div className='bg-secondary d-flex flex-column align-items-center'>
            <TaskList />
          </div>
        </main>
      </div>

    </div>
  )
}

export default Projects

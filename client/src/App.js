import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/projects'
import AlertState from './context/alert/alertState'
import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/taskState'

function App () {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/projects' element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </AlertState>
      </TaskState>
    </ProjectState>
  )
}

export default App

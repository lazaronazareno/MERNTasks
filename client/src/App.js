import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/projects'
import { tokenAuth } from './config/tokenAuth'
import AlertState from './context/alert/alertState'
import AuthState from './context/auth/authState'
import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/taskState'

import PrivateRoute from './components/routes/privateRoute'

const token = localStorage.getItem('token')
if (token) {
  tokenAuth(token)
}

function App () {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact element={<PrivateRoute />}>
                  <Route exact path='/projects' element={<Projects />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  )
}

export default App

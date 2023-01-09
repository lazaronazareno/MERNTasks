import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/projects'
import ProjectState from './context/projects/projectState'

function App () {
  return (
    <ProjectState>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/proyects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ProjectState>
  )
}

export default App

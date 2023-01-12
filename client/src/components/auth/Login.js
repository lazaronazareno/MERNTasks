import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = () => {
  const navigate = useNavigate()

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  const authContext = useContext(AuthContext)
  const { isAuth, error, login } = authContext

  useEffect(() => {
    if (isAuth) {
      navigate('/projects')
    }
    if (error) {
      showAlert(error.msg, error.category)
    }
  }, [error, isAuth])

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const { email, password } = values

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'error')
      return
    }

    login({ email, password })
  }
  return (
    <div className='bg-secondary vh-100 w-100 d-flex align-items-center'>
      {alert
        ? (
          <div className={`error-alert ${alert.category}`}>
            {alert.msg}
          </div>
          )
        : null}
      <div className='container p-4 rounded bg-light'>
        <h1>Iniciar Sesion</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className='form-floating mb-3'>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              placeholder=' '
              value={email}
              onChange={onChange}
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
              placeholder=' '
            />
            <label htmlFor='password'>Contraseña</label>
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
          >Iniciar Sesion
          </button>
        </form>

        <Link to='/register' className='card-link'>Registrarse</Link>
      </div>
    </div>
  )
}

export default Login

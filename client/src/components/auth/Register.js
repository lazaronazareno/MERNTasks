import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = () => {
  const navigate = useNavigate()

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  const authContext = useContext(AuthContext)
  const { isAuth, error, registerUser } = authContext

  useEffect(() => {
    if (isAuth) {
      navigate('/projects')
    }
    if (error) {
      showAlert(error.msg, error.category)
    }
  }, [error, isAuth])

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const { name, email, password, confirm } = values

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '' || name.trim() === '' || confirm.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'error')
      return
    }

    if (password.length < 6) {
      showAlert('La contraseña debe ser de al menos 6 caracteres', 'error')
      return
    }

    if (password !== confirm) {
      showAlert('Las contraseñas no coinciden', 'error')
      return
    }

    registerUser({
      name,
      email,
      password
    })
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
        <h1>Registrarse</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className='form-floating mb-3'>
            <input
              type='name'
              className='form-control'
              name='name'
              id='name'
              placeholder=' '
              value={name}
              onChange={onChange}
            />
            <label htmlFor='name'>Nombre</label>
          </div>
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
              placeholder=' '
              value={password}
              onChange={onChange}
            />
            <label htmlFor='password'>Contraseña</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              name='confirm'
              id='confirm'
              placeholder=' '
              value={confirm}
              onChange={onChange}
            />
            <label htmlFor='confirm'>Repetir Contraseña</label>
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
          >Obtener Cuenta
          </button>
        </form>

        <Link to='/' className='card-link'>Iniciar Sesion</Link>
      </div>
    </div>
  )
}

export default Register

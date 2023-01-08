import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordR: ''
  })
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const { name, email, password, passwordR } = values

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '' || name.trim() === '' || passwordR.trim() === '') {
      setError(true)
      setErrorMessage('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      setError(true)
      setErrorMessage('La contraseña debe ser mayor a 6 caracteres')
      return
    }

    if (password !== passwordR) {
      setError(true)
      setErrorMessage('Las contraseñas no coinciden')
      return
    }

    setError(false)
    console.log(e.target.value)
  }
  return (
    <div className='bg-secondary vh-100 w-100 d-flex align-items-center'>
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
              name='passwordR'
              id='passwordR'
              placeholder=' '
              value={passwordR}
              onChange={onChange}
            />
            <label htmlFor='passwordR'>Repetir Contraseña</label>
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

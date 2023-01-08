import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

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
      setError(true)
      return
    }

    setError(false)
    console.log(e.target.value)
  }
  return (
    <div className='bg-secondary vh-100 w-100 d-flex align-items-center'>
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

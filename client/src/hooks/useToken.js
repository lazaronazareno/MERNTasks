import { useState } from 'react'

export default function useToken () {
  const getToken = () => {
    // eslint-disable-next-line
    const userToken = localStorage.getItem('token')
    return userToken
  }

  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    // eslint-disable-next-line
    localStorage.setItem('token', userToken)
    setToken(userToken.token)
  }

  const removeToken = () => {
    // eslint-disable-next-line
    localStorage.removeItem('token')
    setToken(null)
  }

  return {
    setToken: saveToken,
    token,
    deleteToken: removeToken
  }
}

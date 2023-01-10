import axios from 'axios'

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

export default clientAxios

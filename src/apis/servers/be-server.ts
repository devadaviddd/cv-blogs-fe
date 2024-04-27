import axios from 'axios'

const BackendServer = axios.create({
  baseURL: process.env.BACKEND_ENDPOINT,
})

export default BackendServer

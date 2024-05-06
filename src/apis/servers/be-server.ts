import axios from 'axios'


const BackendServer = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
  validateStatus: () => true,
})

export default BackendServer

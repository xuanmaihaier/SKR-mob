import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 2000
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(response => {
  return response.data
},
  error => {
    return new Promise(() => { })
  }
)

export default instance
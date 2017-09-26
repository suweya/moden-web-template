import axios from 'axios'

axios.defaults.baseURL = 'http://api.suweya.me/'

axios.interceptors.request.use(function (config) {
  if (config.WITH_AUTH) {
    config.headers.Authorization = 'Bearer 123'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.getAuth = (url, config) => {
  return axios.get(url, { ...config, WITH_AUTH: true })
}

export default axios

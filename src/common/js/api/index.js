import axios from './axios'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

export const getApps = () => axios.getAuth('mobile/getApps')

export const getAppsError = () => axios.getAuth('mobile/getAppsError')

export const users = (id) => axios.get(`users/${id}`)

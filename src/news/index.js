import 'common/css/app.css'
import app from 'common/js/app'
import axios from 'common/js/axios'

$(() => {
  axios.getAuth('auth', {})

  app('about')
})

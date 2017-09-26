import './index.css'
import Logo from '../assets/imgs/logo.png'
import 'common/css/app.css'
import app from 'common/js/app'
import axios from 'common/js/axios'

$(() => {
  axios.getAuth('auth', {})

  $('#logo').attr('src', Logo)

  app('about')
})

import './index.css'
import Logo from '../assets/imgs/logo.png'
import 'common/css/app.css'
import app from 'common/js/app'

$(() => {
  $('#logo').attr('src', Logo)

  app('about')
})

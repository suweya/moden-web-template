import './index.css'
import Logo from '../assets/imgs/logo.png'
import 'common/css/app.css'
import app from 'common/js/app'
import * as api from 'common/js/api'

$(() => {
  api.getApps().then(val => {
    app(val)
  })

  $('#logo').attr('src', Logo)

  app('about')
})

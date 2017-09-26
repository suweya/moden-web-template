import 'common/css/app.css'
import app from 'common/js/app'
import * as api from 'common/js/api'

$(() => {
  api.getApps().then(val => {
    app(val)
  })

  app('about')
})

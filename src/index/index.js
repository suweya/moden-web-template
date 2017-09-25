// import $ from 'jquery'
import './index.css'
import 'common/css/app.css'
import app from 'common/js/app'

$(function() {
  $('#btn').on('click', (e) => {
    Delay(500, 'Button Click').then(val => {
      app(val)
    }).catch(err => {
      console.error(err)
    })
  })
})

const Delay = (delay, event) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${event} success`)
    }, delay)
  })
}

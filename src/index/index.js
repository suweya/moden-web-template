// import $ from 'jquery'
import './index.css'

$(function() {
  $('#btn').on('click', (e) => {
    Delay(500, 'Button Click').then(val => {
      console.log(val)
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

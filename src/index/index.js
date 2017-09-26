// import $ from 'jquery'
import './index.css'
import 'common/css/app.css'
import app from 'common/js/app'
import { getApps } from 'common/js/api'

$(function () {
  getApps().then(val => {
    app(val)
  })

  $('#btn').on('click', (e) => {
    Delay(500, 'Button Click').then(val => {
      app(val)
    }).catch(err => {
      console.error(err)
    })
  })

  const s = new Set();

  [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x))

  for (let i of s) {
    console.log(i)
  }

  const m = new Map()
  const o = { p: 'Hello World' }

  m.set(o, 'content')
  app(m.get(o)) // "content"

  app(m.has(o)) // true
  app(m.delete(o)) // true
  app(m.has(o)) // false

  let a = { v: 1 }
  let q = Object.assign({}, a, {v: 2, e: 1})
  app(q)
})

const Delay = (delay, event) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${event} success`)
    }, delay)
  })
}

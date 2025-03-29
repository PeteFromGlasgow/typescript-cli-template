import { getHelloWorld } from './index.js'

window.addEventListener('DOMContentLoaded', () => {
  const output = (message: string) => {
    document.body.innerHTML += `<div>${message}</div>`
  }
  
  const helloWorld = getHelloWorld(output)
})

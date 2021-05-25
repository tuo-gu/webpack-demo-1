import x from './x.js'
import png from './assets/1.png'
const div=document.querySelector('#app')
div.innerHTML=`
  <img src="${png}">  
`
const button=document.createElement('button')
document.body.appendChild(button)
button.innerText='懒加载'
button.onclick=()=>{
  const promise=import('./lazy.js')
  promise.then((module)=>{
    module.default()
  },()=>{})
}
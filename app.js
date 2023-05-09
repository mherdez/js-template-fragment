
const usuarios = ['ana','pedro','jose']


const container = document.querySelector('#app')

const template  = document.querySelector('template').content
const fragment  = document.createDocumentFragment()


usuarios.forEach( nombre => {

  template.querySelector('h1').textContent = nombre

  const clone = template.cloneNode(true)
  fragment.appendChild(clone)

})

container.appendChild(fragment)
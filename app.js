
const usuarios = ['ana','pedro','jose','maria','petra','chonita']


const fotoAzar = () => Math.floor(Math.random() * 100 + 1)

const container = document.querySelector('#app')

const template  = document.querySelector('template').content
const fragment  = document.createDocumentFragment()

usuarios.forEach( usuario => {
  template.querySelector('h1').textContent = usuario
  template.querySelector('img').setAttribute('src', `https://picsum.photos/id/${ fotoAzar() }/200`)

  const clone = template.cloneNode(true);
  fragment.appendChild(clone)
})

container.appendChild(fragment)

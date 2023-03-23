//mudar o conteudo do texto

const element = document.querySelector('h1')

element.textContent += 'meu blog 2'

//texto internop 
element.innerText = "ola deves"

element.innerHTML = "ola devs <small> !!! <small>"


//value
const elementdois = document.querySelector('input')

elementdois.value = "valor que eu quiser "

//atributos

const header = document.querySelector('header')
header.setAttribute ('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId)

console.log(headerId.getAttribute('id'))





const element = document.getElementById('blog');
console.log(element)

const elementTwo = document.getElementsByClassName('blogTwo');
console.log(elementTwo)

const elementtres = document.getElementsByTagName('h2');
console.log(elementtres)




const elementQuatro = document.querySelector('#blog');
console.log(elementQuatro)

const elementCinco = document.querySelectorAll('#blog');
console.log(elementCinco)



//parentElement e parentNode
const body = document.querySelector('body')
console.log(body.parentNode)


//pegando elementos filhos 
//childNodes e children, frisChild, fistElementChild, lastChild
console.log(body.children)



//buscando irmãos
const el = document.querySelector('header')
//nextSibling e nexElementSibling
console.log(el.nextSibling)
console.log(el.nextElementSibling)


//previousSibling e previousElementSibling
const ele = document.querySelector('body script')
console.log(ele.previousSibling)
console.log(ele.previousElementSibling)

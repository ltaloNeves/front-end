//criando elemento
const div = document.createElement('div')

div.innerText = 'oi italo'
//append 
const body = document.querySelector('body')
body.append(div)
body.prepend(div)


//adicionar em local especifico
const p = body.querySelector('p')
body.insertBefore(div, p)
//inserir depois
const script = body.querySelector('script')
body.insertBefore(div, script.nextSibling)
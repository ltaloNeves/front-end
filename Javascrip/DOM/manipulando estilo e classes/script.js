const element = document.querySelector('body')

element.style.backgroundColor = '#f9f3d2'

element.classList.add('active')
console.log(element.classList)
element.classList.remove('active')


element.classList.toggle('active')
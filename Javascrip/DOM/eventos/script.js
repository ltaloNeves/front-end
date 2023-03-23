function print(){
    console.log('print')
}


//eventos de teclado
const input = document.querySelector('input')
input.onkeydown = function (event){
    console.log('rodei')
    console.log(event.key)

    //pegar valores de m imput
    console.log(event.currentTarget.value)
}

//adicionar eventos via js

const h1 = document.querySelector('h1')
h1.addEventListener('click', print)


//outro metodo

h1.onclick = print


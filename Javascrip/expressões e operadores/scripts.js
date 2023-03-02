//expressõese e operadores

//expressions
//qualquer linha de codigo que resolve algo 

//bom usar ponto e virgula nesse exemplo
let number = 1;
//expressão de uma expressão autoexecutavel
(function () {
    console.log("italo")
})()

//operators
//binary: dois elementos para que tenha um operador 
console.log(number + 1)

//unary: só um elemento, com um operador para incrementar ele
//-- (operador de decremento)
console.log(++number)

//ternary
//receber uma expressão
console.log(false ? "alo" : "nada")


//New
//left hand side expression/criar um novo objeto
let name = new String("italo")
let age = new Number(23)
console.log(name, age)


//operadores unarios
//typeof
console.log(typeof number)
//delete
const person = {
    name2: "italo",
    age: 23,
}
delete person.age
console.log(person)

//operadores aritimeticos
/*
multiplicação: *

divisão: /

soma: +

subtração: -

resto: %

incremento: ++

decremento: --

exponencial: **

igual: ==

diferente !=

estritamente igual a: ===

estritamente diferente de: !==

maior que: > -maior igual >=

menor que: < -menor igual <=

atribuição/assignment

x = 1
adicção
x += 2
sub
x -=1 
mult
x *= 1 
divisão
x /= 1 
exponencial
x **= 2
*/

//grouping operator ( )
let total = (2 + 2) * 5
console.log(total)

let one = 1
let two = 2

console.log(two == 1)
console.log(one == "1")
//_______________
console.log(one === "1")
console.log(one === 1)
console.log(two !== "2")
console.log(two !== 2)

/*
Operadores logicos
*/

let pao = false
let queijo = true

//AND &&: verdadeiro verdadeiro "e"
console.log(pao && queijo)

//or || 
console.log(pao || queijo)

//not ! 
console.log(!pao)


//variaveis e tipos de dados 
var name = "italo"
console.log(name)

//agrupamento de declarações
let age, isHuman

age = 10
isHuman = false

console.log(name, age, isHuman)

//escrita de texto + variavel

console.log('o '  + name + ' tem ' + age + ' anos.')


//interpolando valores com tamplete literals or tamplete strings
console.log(`o ${name} tem ${age} anos`)

//object
const person = {
    name: "italo",
    age: 22,
    weight: 100,
    isAdmin: true
}
console.log(person)
//imprimir apenas algo do objeto
console.log(person.name)
console.log(`${person.name} tem ${person.age} anos`)

//array

const animals = [
    'lion', 'monkey', 'cat'
]
//acessando taca item do array
console.log(animals[0])

//acessando o total
console.log(animals.length)

//pratica
weight = 100

console.log(typeof weight)

let students ={
    name: 'italo',
    age: 22,
    stars: 9.5,
    isSubscribed: false
}



//colocando um novo students na posicção 1 do array student
let layse = {
    name: "layse",
    age: 23,
    weight: 48.9,
    isSubscribed: true,

}
let student = []

student =  [
    students
]

student = [
    students,
    layse
]

console.log(typeof students)


console.log(student)

console.log(student[0])

console.log(student[1])




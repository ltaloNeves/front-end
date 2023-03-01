//prototype
//com o __proto__ eu consigo ver o que tem dentro das coisas com isso
//pode ajudar na manipulação de dados
console.log("italo".__proto__)

console.log(["2", "3"].length)

//type conversion e coersion: alterar tipode de dados
//type conversion: eu alterando o tipo de dado
//coersion: javascript fazendo isso

console.log(Number("5") + 5)
console.log(String(5) + 5)


//tranformando string em numero e numnero em string
let string = "1234"
console.log(Number(string))
let number = 4321
console.log(String(number))

//quantos caracteres tem em uma palavra e numero
let word = "jumento"
console.log(word.length)

console.log(String(number).length)

//numero quebrado trocar ponto por virgula 

let number2 = 3243234.454354
//objetos podem ter varias funções uma atrelada a outra
console.log(number2.toFixed(2).replace(".", ","))

//minusculas em maiusculas
let maiusculas = "aaaaaaaaaaaaaaaa"
console.log(maiusculas.toUpperCase())
let minusculas = 'AAAAAAAAAAAAAAAAAA'
console.log(minusculas.toLowerCase())

//separando strings
//separando um texto que tem espaços em um novo array onde 
//cada novo texto é uma posição do array
//depois disso tranformar o array em texto e onde eram os espaços ´
//_

let phrase = "eu amo layse¹"
let myArrayy = phrase.split(" ") //o numero pode mudar de acordo com o grau de separação desejado

console.log(myArrayy)
let phraseArray = myArrayy.join("_")
console.log(phraseArray)


//verificando se um texto tem uma palavra especifica

let amor = "le le le le le le "
console.log(amor.includes("amor")) //case sensitive 

//criando array com construtor 


let arrayNovo = new Array ("a", "b", "c")
console.log(arrayNovo)

//contar elementos de um array

let arrayNovo2 = new Array (1,2,3,4).length
console.log(arrayNovo2)


//strings para arrays
 let word2 = "manipulação"
 console.log(Array.from(word2))

 const variaveis = "123456789893894848"
 let arrayvariavel = new Array (Array.from(variaveis))
 console.log(arrayvariavel)

 //manipular Array
 let techs = ["html", "css", "js", "python", "java"]

//adicionar um item no fim
techs.push ("node.js")
//adicionar no começo
techs.unshift("sql")
//remover do fim 
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
//dizer de onde começa a cortar até onde que que seja cortado
console.log(techs.slice(1,2))
//remover 1 ou mais items em qualquer posição do array
//o primeiro e o index e o segundo quantos elementos quer tirar
techs.splice(1,1)
//encontrar a posição de um elemento no array
let index = techs.indexOf ("python")

//--------
console.log(techs)
console.log(index)


 

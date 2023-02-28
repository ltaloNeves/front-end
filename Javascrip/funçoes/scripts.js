//FUNÇÕES
//toda função retorna algo
//explicar o que o codigo tá fazendo e repetir o codigo varias vezes
//nesse momento a fução esta fazendo isso


//serve como agrupamento
//declaração da função
function creatPhrases() {
    console.log("oi tudo bem?")
    console.log("sim e voce?")
    console.log("tem certeza?")
}
//executar a função
creatPhrases()

//ARGUMENTOS E PARAMETROS 

//pode declarar funções dentro de variavel



//atribuuindo os valores para a funçõa pegar os valores de sum
const sum = function (number1, number2) {
    //console.log(number1 + number2)
    soma = number1 + number2
    return soma
}
//sum(2, 3) // Arguments 

//retornar valores dentro da função
let number1 = 34
let number2 = 25
//
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
//depois que a função é rodada em sum
//é possivel ter a variavel total fora do escopo de forma "magica"
console.log(soma)


function caixaSuco(furta1, fruta2) {
    return furta1 + fruta2
}
const copo = caixaSuco('banana', 'uva')
console.log(copo)

//FUNCION SCOPE

let subject = 'create video'

//o modo de fazer o subject virar studynas duas opções é removendo 
//o parametro
/*
function createThink(){    
}
*/
function createThink(subject) {
    subject = 'study'
    return subject
}
console.log(subject)
console.log(createThink(subject))
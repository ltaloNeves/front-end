//variaveis 

/*
nomes simnbolicos que servem para receber algum valor 
atalhos
identificadores
3 palavras chaves para criar uma variavel

    var
    let
    const
*/

//var
var clima = "quente"
console.log(clima)
//aquin ele tá recebendo

let frio = "frio"
console.log(frio)
//funciona do mesmo jeito que o var

//const: não muda o valor durante a atualização, não é uma variavel alteravel

const quente = "muito quente"

console.log(quente)


//as variaveis não precisam ter um tipo definido
 
let hhh = 3
console.log(typeof hhh)


/*
Scope: determina a visibilidade de alguma variavel

block statement declaração de bloco {}
    o bloco tbm irar criar um novo scope



*/

{
    let x = 0
    console.log(x)
}

//var é global e local e pode funcionar fora de um bloco
//ele faz um hoisting: uma elevação
console.log('existe um x antes do bloco', x)
{
    var x = 0
}
console.log('existe um x depois do bloco?', x)

//let e const: não são variaveis globais, apenas locais
//não faz um hoisting, funciona comm base na ordem


{
    //console.log('existe y antes?', y)
    //vai dar erro pois elenão pode acessar o y antes
    const y = 9
    console.log('existe y no bloco', y)

}

//vai dar erro pois ele esta fora do bloco
//console.log('existe y depois do bloco', y )





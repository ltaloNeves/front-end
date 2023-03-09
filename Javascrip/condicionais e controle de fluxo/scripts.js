//control flow

//if e else
let temperatura = 37
if (temperatura >= 37.5) {
    console.log("esta com febre alta")

} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log("febre moderada")
}
else {
    console.log("não tá com febre")

}

//switch

let expression = "a"

switch (expression) {
    case 'a':
        console.log("a")
        break
    case "b":
        console.log('b')
        break
    default:
}

//throw
//disparar um erro
function digameunome(name = '') {
    if (name === "") {
        throw new Error("nome é obrigatorio")
    }
    console.log("depois do erro")
}

//try/catch

//executar apos um erro
try {
    digameunome()

} catch (e) {
    console.log(e)

}
console.log("apos a função de erro")
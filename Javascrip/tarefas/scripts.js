function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const aleatorioNumero = aleatorio(1, 100)
console.log(aleatorioNumero)

if (aleatorioNumero >= 90){
    console.log("A")

}else if (aleatorioNumero > 80 && aleatorioNumero < 89 ){
    console.log("B")

}else if (aleatorioNumero > 70 && aleatorioNumero < 79){
    console.log("C")

}else if (aleatorioNumero > 60 && aleatorioNumero < 69){
    console.log("D")

}else if(aleatorioNumero < 60){
    console.log("F")
} 

//criar um objeto com 2 propriedades do tipo array

let family = {
    receitas: [1000, 3000, 2000],
    despesas: [500, 484, 938, 393],
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    
    return total

}
function calculoT(){
    const calculoR = sum(family.receitas)
    const calculoD = sum(family.despesas)
    const total = calculoR - calculoD

    const ok = total >= 0
    let message = "seu saldo foi"

    let balenceText = "negativo"

    if (ok){
        balenceText = "positivo"

    }
    console.log(`Saldo é ${balenceText}: ${total}`)
}
calculoT()


//celsos em fahrenheit

function transforme(degree){
    const celciusE = degree.toUpperCase().includes("C")
    const fahrenheitE = degree.toUpperCase().includes('F')

    if (!celciusE && !fahrenheitE ){
        throw new Error ("grau não existe")
    }
    let uptadeDegree; 
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

}
try {
    transforme ("50F")
    transforme("50Z")
} catch (error) {
    console.log(error.message)
    
}
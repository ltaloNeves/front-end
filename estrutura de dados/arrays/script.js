//gerenciamento de dados
//necessario modelar a estrutura 
//da vida (estanciar essa estrutura)
//criar funcionalidades 
//inserir, excluir, buscar, exibir, contar


const arrayList = ['a', 1223, "italo", Boolean]



console.log(arrayList)

console.log(arrayList[2])

arrayList.pop()
arrayList.push(234)

console.log(arrayList)
console.log(arrayList.length)

//interavel

for(let arrayLists of arrayList){
    console.log(arrayLists)
}

//encontrar um elemento


const italo = arrayList.find(arrayLists => arrayLists === 'italo')
console.log('italo')

//tambem serve para deletar elemento
arrayList.splice(1,1)
console.log(arrayList)



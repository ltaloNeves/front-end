//enqueue(): adicionar um elemento ao final da fila
//dequeue(): remover o primeiro elemento a entrar na fila


//modelagem

class Queue{
    constructor(){
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)

    }
    dequeue(){
        const item = this.data.shift() //shift é uma funcionalidade JS que vai dentro d
        //o arrasy e remover o primeiro item a entrar na fila

        console.log(`${item} saiu da fila`)
    }
}

//utilizando
const fila = new Queue()


fila.enqueue('italo')
fila.enqueue('layse')
fila.enqueue('helena')
fila.dequeue()
fila.dequeue()
fila.dequeue()
//stack
//pilhas 
//o ultimo a entrar na pilha é o primeiro a sair

//push, pop, peek, size

//modelagem

class Stack{
    constructor(){
        this.data = []
        this.top = -1
    }
    push(value){
        //adicionando o valor dentro do top
        this.top++
        //colocando dentro do data
        this.data[this.top] = value
        return this.data

    }
    pop(){
        if(this.top < 0) return undefined
        const poopedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poopedTop

    }
    peek(){

        return this.top >= 0 ? this.data[this.top]: undefined
    }

}

const stack = new Stack()

//adicionar datos
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover 
stack.pop()
console.log(stack.pop())
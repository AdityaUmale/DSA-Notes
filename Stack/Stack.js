class Stack {
    constructor(){
        this.stack = []
    }

        push(data){
            this.stack.push(data)
        }

        pop(data){
            this.stack.pop()
        }

        peek(){
            return this.stack[this.stack.length - 1]
        }

        isEmpty(){
            return this.stack.length === 0
        }

        size(){
            return this.stack.length
        }

        clear(){
            this.stack = []
        }

        contain(element){
            return this.stack.includes(element)
        }

        reverse(){
            this.stack.reverse()
        }

        printStack(){
            let str = ''
            for (let i = 0; i < this.stack.length; i++) {
                str += this.stack[i] + "/n"
                
            }
            return str
        }
}

//usage example

let myStack = new Stack()
myStack.push(2)
myStack.push(3)
myStack.push(8)
myStack.pop()

console.log(myStack.printStack())
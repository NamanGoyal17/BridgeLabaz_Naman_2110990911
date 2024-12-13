class Stack{
    constructor(){
        this.array = [];
    }

    // To Push
    push(data){
        this.array.push(data);
    }
    // To Display the element
    display(){
        console.log(this.array);
    }
    // To Display the top element 
    peek(){
        console.log(this.array[this.array.length-1]);
    }
    // To pop the top the element
    pop(){
        if(this.array.length == 0){
            console.log("Stack is empty");
        }
        else{
            this.array.pop();
        }
        
    }
    // To check the stack is empty
    isEmpty(){
        if(this.array.length == 0){
            console.log(true);
        }
        else{
            console.log(false);
        }
        
    }
    // To check the size of the stack
    size(){
        console.log(this.array.length);
    }
    reverse(){
        this.array = [];

    }
}

const myStack = new Stack();
//myStack.push(5);
//myStack.push(6);
//myStack.push(7);
//myStack.push(8);
myStack.push(9);
myStack.pop();
myStack.pop();
myStack.peek();
myStack.isEmpty();
myStack.size();
myStack.display();
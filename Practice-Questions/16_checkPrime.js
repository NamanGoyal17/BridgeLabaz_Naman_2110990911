// Create a function that will return a Boolean specifying if a number is prime
const prompt = require('prompt-sync')();
let num = pareseInt(prompt("Enter the number "));
let isActive = true;
for(let i = 2;i<num;i++){
    if(num%i == 0){
        isActive = false;
    }
}
console.log(isActive);
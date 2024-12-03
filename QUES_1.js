/*
Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
*/

let number = [];
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*(900-100+1))+100;
    number.push(num);
}
let min = Math.min(...number);
let max = Math.max(...number);

console.log(number);
console.log(min);
console.log(max);
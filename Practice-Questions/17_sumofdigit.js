// Calculate the sum of digits of a positive integer number
let num = 456;
let sum = 0;
while(num!=0){
    let elem = num%10;
    sum = sum+elem;
    num = Math.floor(num/10);
}
console.log(sum);
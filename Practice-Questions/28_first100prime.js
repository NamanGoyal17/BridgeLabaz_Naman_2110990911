// Print the first 100 prime number
function isPrime(num){
    if(num <= 1) return false;
    for(let i =2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
}
let arr = [];
let num = 100;
let prime = 2;
while(num!=0){
    if(isPrime(prime)){
        arr.push(prime);
        num--;
    }
    prime++;
}
console.log(arr);
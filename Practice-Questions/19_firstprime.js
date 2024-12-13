// Create a function that will return in an array the first “p” prime numbers greater than “n”
function isPrime(num){
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
function firstPrime(n,p){
    n = n+1;
    let arr = [];
    while(p!=0){
        if(isPrime(n)){
            arr.push(n);
            p--;
        }
        n++;
    }
    console.log(arr);
}
let n = 10;
let p = 5;
firstPrime(n,p);
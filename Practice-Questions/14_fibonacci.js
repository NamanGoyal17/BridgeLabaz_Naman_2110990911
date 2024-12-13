// Print the first 10 Fibonacci numbers without recursion
let first = 0;
let second = 1;
console.log(first);
console.log(second);
for(let i=3;i<=10;i++){
    let next = first+second;
    console.log(next);
    first = second;
    second = next;
}
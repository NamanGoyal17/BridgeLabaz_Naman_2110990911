// Calculate the average of the numbers in an array of numbers
let arr = [1,2,3,4,5,6,7,8,9];
let n = arr.length;
let sum = 0;
for(let i=0;i<n;i++){
    sum = sum + arr[i];
}
let average = sum/n;
console.log(average);
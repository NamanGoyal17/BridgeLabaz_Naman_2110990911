// Rotate an array to the left 1 Position
//[1,2,3,4,5] = [2,3,4,5,1];
let arr = [1,2,3,4,5];
let ans = [];
for(let i=0;i<arr.length;i++){
    ans[(i-1+arr.length)%arr.length] = arr[i];
}
console.log(ans);
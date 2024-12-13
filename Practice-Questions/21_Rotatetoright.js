// Rotate an array to the right 1 position
// [1,2,3,4,5] = [5,1,2,3,4]
let arr = [1,2,3,4,5];
let ans = [];
for(let i=0;i<arr.length;i++){
    ans[(i+1)%arr.length] = arr[i];
}
console.log(ans);
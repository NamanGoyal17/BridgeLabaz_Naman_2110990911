// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positiveArray(arr){
    let n = arr.length;
    let newarray = [];
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            newarray.push(arr[i]);
        }
    }
    console.log(newarray);
}
let arr = [1,2,3,-7,4,-6,-9,5];
positiveArray(arr);
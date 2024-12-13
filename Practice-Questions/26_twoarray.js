// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let result = difference(array1, array2);
console.log(result);  

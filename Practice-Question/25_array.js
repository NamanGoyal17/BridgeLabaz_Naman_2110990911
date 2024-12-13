// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function Difference(arr1, arr2) {
    const diff1 = arr1.filter(item => !arr2.includes(item));
    const diff2 = arr2.filter(item => !arr1.includes(item));
    return diff1.concat(diff2);
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let result = Difference(array1, array2);
console.log(result); 

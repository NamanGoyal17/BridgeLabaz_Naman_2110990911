// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function getDistinctElements(arr) {
    return [...new Set(arr)];
}
let array = [1, 2, 3, 2, 4, 3, 5];
let result = Distinct(array);
console.log(result);  

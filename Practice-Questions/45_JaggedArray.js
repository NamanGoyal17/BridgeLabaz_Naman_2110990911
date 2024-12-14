// Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
//    levels)

function sumJaggedArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumJaggedArray(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

let jaggedArray = [1, [2, 3], [4, [5, 6]], 7, [8]];
console.log(sumJaggedArray(jaggedArray));  

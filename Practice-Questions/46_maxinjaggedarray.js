//  Find the maximum number in a jagged array of numbers or array of numbers
function maxJaggedArray(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            max = Math.max(max, maxJaggedArray(arr[i]));
        } else {
            max = Math.max(max, arr[i]);
        }
    }
    return max;
}

let jaggedArray = [1, [2, 3], [4, [5, 6]], 7, [8]];
console.log(maxJaggedArray(jaggedArray));  

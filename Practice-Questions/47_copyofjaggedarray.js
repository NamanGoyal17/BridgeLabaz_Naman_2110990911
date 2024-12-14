// Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(deepCopyJaggedArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let jaggedArray = [1, [2, 3], [4, [5, 6]], 7, [8]];
let copiedArray = deepCopyJaggedArray(jaggedArray);
console.log(copiedArray);  

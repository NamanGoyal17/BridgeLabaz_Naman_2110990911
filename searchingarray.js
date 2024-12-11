let arr = [1,2,3,4,5,6,7,8,9];
// 1 Using find()
let num1 = 0;
num1 = arr.find(val => val===5);
console.log(num1);

// 2 Linear Search
function linearSearch(arr,target){
    for(let i=0;i,arr.length;i++){
        if(arr[i]== target) return i;
    }
    return -1;
}
console.log(linearSearch(arr,5));

// 3 Binary Search
function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid]>target){
            end--;
        }
        else if(arr[mid]<target){
            start++;
        }
    }
    return -1;
}
console.log(binarySearch(arr,3));

// 4 Using indexof();
let num2 = arr.indexOf(7);
console.log(num2);

// 5 Using findIndex()
let num3 = arr.findIndex(elemet => elemet == 7);
console.log(num3);

// 6 Using some()
let num4 = arr.some(element => element==5);
console.log(num4);

// 7 Using includes()
let val = arr.includes(5);
console.log(val);

// 8 Using filter()
let data = arr.filter(elem => elem == 5);
console.log(data);

// 9 Using reduce()
let n1 = arr.reduce((acc,elem,index) =>{
    if(elem == 70){
        acc = index;
    }
    return acc;
},-1);
console.log(n1);

// 10 Using forEach()
let n = 0;
arr.forEach((val, index)=>{
    if(val == 50){
        n = index;
    }
});
console.log(n);

// 11 Recursive Search
function recursiveSearch(arr,index,target){
    if(index >= arr.length){
        return -1;
    }
    if(arr[index]==target){
        return index;
    }
    return recursiveSearch(arr,index+1,target);
}
console.log(recursiveSearch(arr,0,70));

/*
Summary of Methods:

1 Linear Search: Iterate through the array manually.
2 Binary Search: Use for sorted arrays, repeatedly divide the search interval.
3 indexOf(): Find the index of the element.
4 find(): Find the element itself (returns undefined if not found).
5 findIndex(): Find the index of the element (returns -1 if not found).
6 some(): Check if at least one element matches the condition.
7 includes(): Check if the array contains the specified element.
8 filter(): Return all elements matching the condition.
9 reduce(): Accumulate a result while searching (e.g., index of the element).
10 forEach(): Iterate through the array (no return value).
11 Recursive Search: Custom search using recursion.

Each method is suitable for different situations, depending on the complexity of your search and the characteristics of the array.
*/
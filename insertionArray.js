let arr = [1,2,3,4,5,6,7,8,9];
// 1 Using Push()
arr.push(10,11,12,13,14);
console.log(arr);

// 2 Using unshift()
arr.unshift(15);
console.log(arr);

// 3 Using splice(
arr.splice(1,0,16);
console.log(arr);

// 4 Using concat()
let arr2 = [17,18,19,20];
//let newarray = arr.concat(17);
let newarray = arr.concat(arr2);
console.log(newarray);

// 5 Using spread operator(...)
arr = [0,...arr];
console.log(arr);
arr = [...arr,10];
console.log(arr);

// 6 Using Array.from()
//let newarray2 = Array.from(arr());

// 7 Using fill()
// it is use to overwrite a value
arr.fill(4,1,2) // filled index 1 with 4
console.log(arr);

/*
Summary of Methods

Method	            Description	                          Syntax Example
1 push()	        Adds to the end of the array	      arr.push(4)
2 unshift()	        Adds to the beginning of the array	  arr.unshift(0)
3 splice()	        Adds at any position	              arr.splice(1, 0, 4)
4 concat()	        Combines arrays or adds elements	  arr.concat(4)
5 Spread Operator   Combines arrays with syntax	          let newArr = [...arr, 4]
6 Array.from()	    Creates a new array with logic	      Array.from(arr, (item, index) => (index === 1 ? 4 : item))

Each of these methods provides a way to insert elements in different positions of an array. Choose the one that best fits the specific behavior you're looking for in your JavaScript code.
*/
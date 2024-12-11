let arr = [1,2,3,4,5,6,7,8,9];
// 1 pop()
let num = arr.pop();
console.log(arr);
console.log(num);

// 2 shift()
let num2 = arr.shift();
console.log(arr);
console.log(num2);

// 3 splice()
arr.splice(0,2);
console.log(arr);

// 4 delete operator
delete arr[1];
console.log(arr);

// 5 filter() use to fill the new array without a specific value
let newarr = arr.filter(val => val!=6);
console.log(newarr);

// 6 slice()
let newarr2 = arr.slice(0,3);
console.log(newarr2);

/*
Summary of Methods:

Method	   Modifies the Original Array?	             Removes Specific Element(s)?	      Returns Modified Array?
1 pop()	             Yes	                               Last element	                         Yes
2 shift()	         Yes	                               First element	                     Yes
3 splice()	         Yes	                               Any specified index or range	         Yes
4 delete	         Yes (leaves undefined)	               Specific index	                     No
5 filter()	         No	                                   Based on condition	                 Yes (new array)
6 slice()	         No	                                   No, returns a subset	                 Yes (new array)
7 map() + filter()   No                                    Based on condition	                 Yes (new array)
8 forEach()	         No (but can be used with splice())	   Custom logic	                         No
9 reduce()	         No	                                   Based on condition	                 Yes (new array)

Each method has its own specific use case, and which one to use depends on whether you want to mutate the original array, create a new array, or remove elements based on some condition.
*/


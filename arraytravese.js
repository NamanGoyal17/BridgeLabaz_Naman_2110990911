let arr = [1,2,3,4,5,6,7,8,9];
// 1 for loop 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// 2 for of loop 
for(const num of arr){
    console.log(num);
}

// 3 arr.for each
arr.forEach((element)=>{
    console.log(element);
})

// 4 Using Map
let val = 0;
val = arr.map(value => value);
console.log(val);

// 5 Using filter
let oddvalue = 0;
oddvalue = arr.filter(data =>data%2===1);
console.log(oddvalue);

// 6 using reduce
let sum = arr.reduce((data,val)=>data+val,0);
console.log(sum);

// 7 using some ;
let dupl = arr.some((num,index,arr) => arr.indexOf(num)!=index);
console.log(dupl);

// 8 using every
let age = 0;
age = arr.every(data => data<18);
console.log(age);

// 9 Using Find
let num = arr.find(val => val==3);
console.log(num);

// 10 find Index
let num2 = 5;
let ans = arr.findIndex(cal => cal===5);
console.log(ans);

// 11 flat Map
const n = arr.flatMap((x) => x);
console.log(n);

// 12 for in loop
for(let index in arr){
    console.log(arr[index]);
}

// 13 entries
for(let [i,val] of arr.entries()){
    console.log(val);
}
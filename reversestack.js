let str = "arpit";
const mystack = [];
for(let i=0;i<str.length;i++){
    let ch = str.charAt(i);
    mystack.push(ch);
}
let reverse = "";
for(let i=0;i<str.length;i++){
    reverse+= mystack.pop();
}
console.log(reverse);


// let string = "hello hy";
// const arr = string.split(" ");
// const stack = [];
// for(let i=0;i<arr.length;i++){
//     stack.push(arr[i]);
// }
// let rev = "";
// for(let i=0;i<arr.length;i++){
//     rev += stack.pop();
//     rev += " ";
// }
// console.log(rev);
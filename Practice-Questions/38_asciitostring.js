// Create a function that will convert an array containing ASCII codes in a string
function toString(){
    let arr = [72,101,108,108,111];
    let result = "";
    for(let i=0;i<arr.length;i++){
        result += String.fromCharCode(arr[i]);
    }
    console.log(result);
}
toString();
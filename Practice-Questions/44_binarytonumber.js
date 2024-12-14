//Create a function that will convert a string containing a binary number into a number
function binaryToNumber(binaryString) {
// Convert the binary string to a decimal number
    return parseInt(binaryString, 2);
}

const binaryStr = "111"; 
const number = binaryToNumber(binaryStr);

console.log(number); 

// Calculate the sum of numbers received in a comma delimited string
function calculateSum(input) {
    // Split the input string by commas to get an array of numbers (as strings)
    let numbers = input.split(',');

    // Convert each string to a number and calculate the sum
    let sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);

    return sum;
}
let input = "10,20.5,30,40";
console.log("Sum:", calculateSum(input)); 

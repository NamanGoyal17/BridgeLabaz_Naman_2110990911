// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;

    // Make sure num1 is the longer string
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    // Loop through the digits from the end (right to left)
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        // Get the current digits (0 if we've run out of digits)
        let digit1 = i >= 0 ? parseInt(num1[i--]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j--]) : 0;
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    return result;
}
let num1 = "987654321987654321987654321";
let num2 = "123456789123456789123456789";
let sum = addLargeNumbers(num1, num2);
console.log(sum);  
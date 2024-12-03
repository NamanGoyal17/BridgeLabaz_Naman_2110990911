/*
Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9
*/
function convertTemperature(deg, scale) {
    switch(scale) {
      case 'CtoF':
        if (deg >= 0 && deg <= 100) {
          return (deg * 9/5) + 32;
        }
        break;
      case 'FtoC':
        if (deg >= 32 && deg <= 212) {
          return (deg - 32) * 5/9;
        }
        break;
      default:
        return 'Invalid scale';
    }
    return 'Input out of range';
  }

  

//Write a function to check if the two numbers are Palindromes
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  
  function checkPalindrome(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
  }

  
 /* 
  Take a number from user and check if the number is a Prime then show
  that its palindrome is also prime
  a. Write function check if number is Prime
  b. Write function to get the Palindrome.
  c. Check if the Palindrome number is also prime
*/
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }
  
  function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
      let palindrome = getPalindrome(num);
      if (isPrime(palindrome)) {
        console.log(`The number ${num} is prime and its palindrome ${palindrome} is also prime.`);
      } else {
        console.log(`The number ${num} is prime, but its palindrome ${palindrome} is not prime.`);
      }
    } else {
      console.log(`The number ${num} is not prime.`);
    }
  }
  
  let number = prompt("Enter a number: ");
  checkPrimeAndPalindrome(Number(number));
  
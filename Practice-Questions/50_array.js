
function generateUniqueRandomNumbers(n) {
    const uniqueNumbers = new Set();

    // Continue adding random numbers until the set contains 'n' unique numbers
    while (uniqueNumbers.size < n) {
        const randomNum = Math.floor(Math.random() * n) + 1;
        uniqueNumbers.add(randomNum); // Set ensures uniqueness
    }

    // Convert the Set to an array and return it
    return Array.from(uniqueNumbers);
}

// Example usage
const n = 5;
const randomNumbers = generateUniqueRandomNumbers(n);

console.log(randomNumbers); 

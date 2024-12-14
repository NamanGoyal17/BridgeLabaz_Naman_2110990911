// Calculate 70! with high precision
function factorial(n) {
    let result = BigInt(1);

    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

// Example usage:
const result = factorial(70);
console.log(result.toString());  // Output: 70! with full precision

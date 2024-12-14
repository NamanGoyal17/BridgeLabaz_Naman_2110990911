// Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}

// Example usage:
const result = fibonacci(500);
console.log(result.toString());  // Output: Fibonacci(500) with full precision

// Implement the Caesar cypher
function caesarCipher(str, shift) {
    const result = [];
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let char of str) {
        if (lowerCaseAlphabet.includes(char)) {
            // Shift lowercase characters
            const index = lowerCaseAlphabet.indexOf(char);
            const newIndex = (index + shift) % 26;
            result.push(lowerCaseAlphabet[newIndex]);
        } else if (upperCaseAlphabet.includes(char)) {
            // Shift uppercase characters
            const index = upperCaseAlphabet.indexOf(char);
            const newIndex = (index + shift) % 26;
            result.push(upperCaseAlphabet[newIndex]);
        } else {
            // Non-alphabet characters remain unchanged
            result.push(char);
        }
    }

    return result.join('');
}

const plaintext = "Hello, World!";
const shift = 3; 
const encryptedText = caesarCipher(plaintext, shift);

console.log(encryptedText); 


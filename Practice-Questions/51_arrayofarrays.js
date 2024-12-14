// Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
function array(){
    let str = "Hello world";
    const Map = {};
    for (let char of str) {
        char = char.toLowerCase(); // Optional: Convert to lowercase for case-insensitive counting
        Map[char] = (Map[char] || 0) + 1;
    }
    console.log(Map);
}
array();
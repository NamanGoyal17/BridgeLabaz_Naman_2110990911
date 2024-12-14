// Create a function that will convert a string in an array containing the ASCII codes of each character
function toArray(){
    let str = "Hello";
    const ans = Array.from(str).map(char => char.charCodeAt(0));
    console.log(ans);
}
toArray();
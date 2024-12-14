// Create a function that returns an array with words inside a text.
function arrayWords(){
    let str = "hello hy bye bye";
    const words = str.trim(" ").split(/\s+/);
    console.log(words);
}
arrayWords();
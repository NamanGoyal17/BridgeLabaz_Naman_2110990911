// Create a function that will return the number of words in a text
function numberOfwords(){
    let str = "hello hy bye ";
    const words = str.trim().split(/\s+/);
    console.log(words.length);
}
numberOfwords();
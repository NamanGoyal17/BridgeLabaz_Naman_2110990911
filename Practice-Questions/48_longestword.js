// Create a function to return the longest word in a string
function longest(str){
    const words = str.split(/\s+/);
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    console.log(longest);
}
const str = "The quick brown fox jumped over the lazy dog";
longest(str);
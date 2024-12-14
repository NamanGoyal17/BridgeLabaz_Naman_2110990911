// Shuffle an array of strings
function shuffleArray(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    console.log(arr);
}
const stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];
shuffleArray(stringsArray);
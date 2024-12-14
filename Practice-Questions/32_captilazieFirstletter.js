// Create a function that will capitalize the first letter of each word in a text
function upperCase(){
    let str = "hello hy ";
    let result = "";
    //str = str.charAt(0).toUpperCase();
    for(let i=0; i < str.length;i++){
        if(i == 0 || str.charAt(i-1) === ' '){
            result += str.charAt(i).toUpperCase();
        }
        else{
            result += str.charAt(i);
        }
    }
    console.log(result);
}
upperCase();
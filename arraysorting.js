let arr = [3,4,2,8,5,6,2,1,9];
// By the use of Bubble sort method
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
bubbleSort();

// By the use of toSorted
function arrMethodSort(arr){
    return arr.toSorted()
}
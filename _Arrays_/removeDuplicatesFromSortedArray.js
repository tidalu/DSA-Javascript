function removeD(arr) {
    var i = 1; 
    while(i < arr.length) {
        if(arr[i] == arr[i-1]) {
            arr.splice(i, 1)
        }else{
            i++
        }
    }
    return arr
}

console.log(removeD1([1, 2, 2 , 2, 3]))

function removeD1(arr) {
    return  Array.from(new Set(arr))
}



function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
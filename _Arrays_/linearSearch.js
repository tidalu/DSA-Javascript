
function linear(arr, num) {
    var i = 0; 
    var j = arr.length -1 ;
    
    while(i <= j) {
      if(arr[i] == num || arr[j] == num ){
          return true
      } else {
        i++
        j--
      }
  }
    return false
  }
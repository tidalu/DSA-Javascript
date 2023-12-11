var twoSum = function (nums, target) {
    let n = nums.length
    var  i = 0; 
    var j = 1;
    
    var sum = 0
    while(i <= n) {
      if(j > n) {
        j = i+1
        i++
      }
      
      if(target - nums[i] == nums[j]) {
        return  [i, j]
      } 
      j++
      
    }
    
    return sum
  }
  
  console.log(twoSum([2,7,11,15], 9))
  console.log(twoSum([3,2,4], 6))
  console.log(twoSum([3,3], 6))



  var twoSum = function (nums, target) {
    let n = nums.length
   
    
    let obj = {}
    
    for(let i = 0; i< n; i++) {
      let el = nums[i]
      let need = target - el 
      
      if(obj[need] == undefined){
         obj[el] = i
      } else {
        return [obj[need], i]
      }
    }
    
    return "yoq"
    
    
  }
  
  
  var twoSum = function (arr, targer) {
    let n = arr.length;
    let i = 0, j = n -1 ;
    
    let sorted = arr.sort((a, b) => a - b)
    
    while (j > i) {
      let sum = sorted[i] + sorted[j]
      if(sum == targer) {
        return [sorted[i], sorted[j]]
      } else if(sum < targer) {
        i++
      } else {
        j--
      }
    }
  }
  
  console.clear()
  console.log(twoSum([2,7,11,15], 9))
  console.log(twoSum([3,2,4], 6))
  console.log(twoSum([3,3], 6))
  
  
  var twoSum = function (arr, target) {
    let n = arr.length;
    let i = 0, j = n - 1;
  
    let indexedArr = arr.map((value, index) => ({ value, index }));
  
    indexedArr.sort((a, b) => a.value - b.value);
  
    while (j > i) {
      let sum = indexedArr[i].value + indexedArr[j].value;
  
      if (sum === target) {
        return [indexedArr[i].index, indexedArr[j].index];
      } else if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
  };
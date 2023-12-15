// approach 1 : what came to my mind is to loop throuhg the array, and take the first element as the start, and in every iteration compare arr[i] == [taken elment]++ check whenever they are not equal just return the taken element, 

// second approach : we should here find only one missing element, so we first calculate the sum from arr[0] to arr[last-1] like every appearing element, then we find the actual arrays sum, then subtract from each other  the output is the desired number if it is not 0 

// approach 3 : we can use two pointers approach for this , the way it goes it similar to first approach i = 0, j = i+1 always, we check the difference all the time , whenever the difference is more than 1 we return the arr[i]+1

// approach 4: using hashing : we create one hash array .  Now, for each element in the given array, we will store the frequency in the hash array. After that, for each number between 1 to N, we will check the frequencies. And for any number, if the frequency is 0, we will return it.


var unionOfSorted = function (arr) {
 
    var start =arr[0]
    
    for(let i = 0 ; i < arr.length ; i++) {
      if(arr[i] != start)
        {
          return start
        } else {
          start++
        }
    }
    
    return `every number is attending!`
    
  };
  
  var unionOfSorted = function (arr) {
   
    let sum = 0
  
    for(let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      sum+=i;
    }
    
    var sum2 = arr.reduce((sum, val) => sum+= val, 0)
    
    return sum - sum2 
  };
  
  var unionOfSorted = function (arr) {
      var i = 0;
      var j = i + 1;
    
      while(j < arr.length) {
        if(arr[j] - arr[i] != 1) {
          return arr[i] + 1
        } else {
          i++
          j++
        }
      }
    
    return `every number is attending!`
  };
  
  
  
  
  console.log(unionOfSorted([1, 2, 3, 4, 6]));
  
  
  
  function missingNumber(a, N) {  // with xor(^), bitwise operator
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i]; // XOR of array elements
      xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }
  
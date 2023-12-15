/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let hash = new Map()
  
      hash.set(0, 1)
      let sum = 0
      let result = 0
  
      for(let i = 0; i < nums.length; i++) {
          sum += nums[i]
  
          if(hash.has(sum - k)) {
              result += hash.get(sum - k)
          }
  
          hash.set(sum, (hash.get(sum) || 0) + 1)
      }
  
      return result
  };



  /// similar question , find the longest sub array with the given sum k 

  
function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        for (let j = i; j < n; j++) { // ending index
            // add all the elements of subarray = a[i...j]
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

var a = [2, 3, 5, 1, 9];
var k = 10;
var len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);


// for every  sub array we find the sum , if k is found compare the previous length with new one, take the max one 

// complexity  time : O(n^3)  threee nested loops 

// space : O(1)


function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        let s = 0; // Sum variable
        for (let j = i; j < n; j++) { // ending index
            // add the current element to
            // the subarray a[i...j-1]
            s += a[j];

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}



// next  approach with two nested looops 
// here also we in every nested loops 

// better approach using hashing 

function get2(a, k) {
    let n= a.length
    
    let preSumMap = new Map()
    
    let sum = 0; 
    let maxLen = 0;
    for(let i = 0; i< n ; i++) {
      
      sum += a[i];
      
      if(sum == k ) {
        maxLen  = Math.max(maxLen, i+1)
      }
      
      let rem = sum - k;
      
      if(preSumMap.has(rem)) {
        let len = i - preSumMap.get(rem)
        maxLen = Math.max(maxLen, len);
      }
      
      if(!preSumMap.has(sum)) {
        preSumMap.set(sum, i)
      }
      }
    
    
    return `${maxLen} this is `
  }
  
  
  
  
  var a = [2, 3, 5, 1, 9]
  
  var k = 10;
  
  
  var len = get3(a, k)
  console.log(len);
  
  function get3(a, k) {
    let n = a.length
    
    let left = 0, right = 0;
    let sum = a[0]
    let maxLen = 0;
    
    while (right < n) {
      
      while(left <= right && sum > k) {
        sum += a[left]
        left++
      }
      
      if(sum == k) {
        maxLen = Math.max(maxLen, right - left + 1)
      }
      
      
      right++
      if(right < n) sum+= a[right]
    }
    
    return maxLen
  }
  
  
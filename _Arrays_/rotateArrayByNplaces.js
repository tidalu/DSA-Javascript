/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length 
  
    k = k % n
  
  if(k < 0) {
    k = n+k
  }
  
  while ( k> 0) {
    nums.unshift(nums.pop())
    k--
  }
  
  
//   return nums
}; // time limit for large problems

var rotate = function(nums, k) {
    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
    // return nums;
};  // time limit for large problems, 

/// third soluton is 

var rotate = function(num, k) {
    var n = num.length

    // for the cases when k is larger that n  it gives us cycles so modulo gives us the right solution 

    if(k > n) {
        k = k % n
    }

    num.unshift(...num.slice(n-k, n))

    // return num
}; // it is right when here are time limits

// time : O(n) ; cuz slice takes n 

// space is O(1)
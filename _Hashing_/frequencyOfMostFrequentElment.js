/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    var left = 0; 
    var max = Math.max()
    var curr = 0

   
   for(let i = 0; i < nums.length ; i++) {
       curr += nums[i];
       while((i-left+1) * nums[i] > curr+k){
       curr -= nums[left++]
       }
       max = Math.max(max, i-left+1)
   }

    return max;
};


// come again
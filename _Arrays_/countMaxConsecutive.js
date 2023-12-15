var findMaxConsecutiveOnes = function(nums) {
    return  Math.max(...nums.join('').split("0").map(x => x.length))
  
};


var findMaxConsecutiveOnes = function(nums) {

    var count = 0;
    var maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            maxCount = count 
            count = 0;
        } else {
            count++
        }
    }
  return maxCount
};

// Time Complexity: O(N) since the solution involves only a single pass.

// Space Complexity: O(1) because no extra space is used.
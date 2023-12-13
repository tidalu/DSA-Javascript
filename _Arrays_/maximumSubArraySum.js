/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = 0;
  var temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(nums[i], temp + nums[i]);
    sum = Math.max(sum, temp);
  }
  return sum;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));

//

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = -Infinity;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];

    if (temp > sum) {
      sum = temp;
    }

    if (temp < 0) {
      temp = 0;
    }
  }

  return sum;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let incr = false;
  let decr = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      incr = true;
    } else if (nums[i] > nums[i + 1]) {
      decr = true;
    }

    if (incr && decr) return false;
  }

  return true;
};

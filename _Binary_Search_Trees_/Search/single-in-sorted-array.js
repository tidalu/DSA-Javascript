/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid])
      return nums[mid];
    if (mid - 1 >= low && nums[mid] == nums[mid - 1]) {
      if ((mid - 1 - low) % 2 !== 0) {
        high = mid - 2;
      } else {
        low = mid + 1;
      }
    } else {
      if ((high - (mid - 1)) % 2 !== 0) {
        low = mid + 2;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

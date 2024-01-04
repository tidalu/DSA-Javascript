var findMin = function (nums) {
  let num = nums.length;
  let low = 0;
  let high = num - 1;
  let ans = nums[0];

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }

  return nums.indexOf(ans);
};

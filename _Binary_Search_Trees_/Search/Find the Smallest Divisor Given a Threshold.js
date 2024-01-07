/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let low = 1;
  let high = Math.max(...nums);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = 0;
    for (let i of nums) {
      sum += Math.ceil(i / mid);
      if (sum > threshold) break;
    }

    if (sum <= threshold) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] == nums[low] && nums[mid] == nums[high]) {
      low++;
      high--;
      continue;
    }
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 4));
console.log(search([5, 1, 3], 5));

// what we are doing is we are checking which side is in sorted order, in sorted ofder we are checking if the target is there, first < target < last, and we are taking the existing part, and eliminating the other half, otherwize if target is ntoavailable here, we are moving to unsorted part, and we are checking if the target is there, if target si now avaialable at all we are returning -1 , in case of when we haev duplicates, like first == last == mid , we are just skipping those elements by first++ last --

// time complexity is in worst case O(n/2)  average case O(log(2)n)

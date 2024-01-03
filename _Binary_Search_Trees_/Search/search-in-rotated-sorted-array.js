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
    } else if (nums[mid] > nums[low] || nums[mid] > nums[high]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
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

/////
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

// what we are doing is we are checking which side is in sorted order, in sorted ofder we are checking if the target is there, first < target < last, and we are taking the existing part, and eliminating the other half, otherwize if target is ntoavailable here, we are moving to unsorted part, and we are checking if the target is there, if target si now avaialable at all we are returning -1

// time: O(logn)

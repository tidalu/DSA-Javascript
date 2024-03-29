// recursive binary search

var search = function (nums, target, first, last) {
  if (first > last) return -1;

  let mid = first + (last - first) / 2;
  if (nums[mid] == target) return mid;
  if (nums[mid] > target) return search(nums, target, first, mid - 1);
  else return search(nums, target, mid + 1, last);
};

console.log(search([-5, 4, 6, 8, 10, 12, 78], 10, 0, 6));

// iterative bunary search

var search = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return -1;
};

// time complexity is O(log2n) - log base 2 n

//// intuition
// there what we are doing is , we are geassing that the target is there, but more efficient guess,
// we are having a var mid, and the value is the middle index of the nums , then we are chekcing
// if target is whihc side, if it is greater that target then we should look for only the left subarray , else right subarray, /
// whenever the mid index value if the nums is equal to target , then we just return the mid index, else retuurn -1

// theory

// binary search is applicable only when the [data is sorted]
// overflow case, to avoid this , if we are sure that the arget is between first and last, we can assign mid as this:
// mid = first + (last - first) / 2
// in this case when data is so high, last is MAX_SAFE_INTEGER, in our normal condition it gets like (MAX_SAFE_INTEGER + MAX_SAFE_INTEGER)/2 which gets overflow, so that we can use the mid assigning above which is safer,

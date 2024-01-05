var findPeakElement = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || arr[i - 1] < arr[i]) &&
      (i == n - 1 || arr[i] > arr[i + 1])
    ) {
      return i;
    }
  }
  return -Infinity;
};

// this is brute force approach, where wr are iterating through array, and checking if the current array is beak , for the first and last elements we we are skipping checking for those only,
// time complexity: O(n)
// space complexity: O(1)

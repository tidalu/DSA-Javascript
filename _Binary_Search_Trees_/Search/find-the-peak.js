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

// --------------------------

var findPeakElement = function (arr) {
  let n = arr.length;
  if (n == 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid - 1] < arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

// Binary search approach
// here what we are douing is, they are saying that is has one peak or multiple peaks, do not care about just return one , so we are like assigning that if we have a peak, one side is increasing one side is decreasing order, so we are we are running classic BS , for mid we are checking if it is peak, if not we are checking if the mid is in decreasing side peak is on the left side high = mid - 1, else epparently it means it is on the increasing side  so it means the peak is on the right so low = mid + 1, there could be one case not in our solution we are covering that solution also, when the mid is in like reversal peak like deepnes [5, 1, 2]  so mid is one  and both side is indreasing means both sides have peak, so that we can cgo any side we want

// time complexity is o(logn)
// space compplexity is O(1)

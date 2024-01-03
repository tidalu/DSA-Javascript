var countOccInSortedArray = function (arr, x) {
  let n = arr.length;
  let count = 0;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      count = 1;
      let first = mid;
      let last = mid;

      while (first > 0 && arr[first - 1] == arr[first]) {
        count++;
        first--;
      }

      while (last < n - 1 && arr[last + 1] == arr[last]) {
        count++;
        last++;
      }

      return count;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
};

console.log(countOccInSortedArray([2, 2, 3, 3, 3, 3, 4], 3));
console.log(countOccInSortedArray([1, 1, 2, 2, 2, 2, 2, 3], 2));

// time complexity is O(logn)
// space complexity is O(1)

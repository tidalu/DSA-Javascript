function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(lowerBound([1, 2, 3, 44, 44, 44, 44, 56, 67], 44));

function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(upperBound([1, 2, 3, 44, 44, 44, 44, 56, 67], 44));

// time complexity is O(log(2)n)

var solve = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
};

// second way with merge sort
//---------------------------------------------------------------------------------
function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  let cnt = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      cnt += mid - left + 1;
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return cnt;
}

function mergeSort(arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  let mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid);
  cnt += mergeSort(arr, mid + 1, high);
  cnt += merge(arr, low, mid, high);

  return cnt;
}

function numberOfInversions(a) {
  return mergeSort(a, 0, a.length - 1);
}

console.log(numberOfInversions([1, 2, 3, 4, 5])); // Output: 0
console.log(numberOfInversions([5, 4, 3, 2, 1])); // Output: 10 (5 inversions)
console.log(numberOfInversions([5, 3, 2, 1, 4])); // Output: 8 (3 inversions)

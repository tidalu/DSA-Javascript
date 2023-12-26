var solve = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
};
//---------------------------------------------------------------------------------
function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
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
}
function countPairs(arr, low, mid, high) {
  let count = 0;
  let right = mid + 1;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    count += right - (mid + 1);
  }
  return count;
}
function mergeSort(arr, low, high) {
  let count = 0;
  if (low >= high) return count;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return count;
}

function numberOfInversions(a) {
  return mergeSort(a, 0, a.length - 1);
}

console.log(numberOfInversions([1, 3, 2, 3, 1]));
console.log(numberOfInversions([2, 4, 3, 5, 1]));

// space complaexit is : O(1)
// time complexity is : O(2nlogn)

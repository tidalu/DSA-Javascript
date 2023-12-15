function name1(nums) {
  let long = 1;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    let temp = 1;
    while (ls(nums, num + 1) === true) {
      num += 1;
      temp += 1;
    }
    long = Math.max(long, temp);
  }
  return long;
}

function ls(arr, num) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

console.log(name1([100, 200, 1, 2, 3, 4]));

// time complesxity : O(n^2)
// space complexity : O(1)

// second solutioin

function name1(nums) {
  let longest = 1;
  let lastSmaller = -Infinity;
  let count = 0;
  let sorted = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 == lastSmaller) {
      count++;
      lastSmaller = nums[i];
    } else if (lastSmaller != nums[i]) {
      count = 1;
      lastSmaller = nums[i];
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

console.log(name1([100, 200, 1, 2, 3, 4]));

// time complexity is O(nlogn)
// space is O(1)

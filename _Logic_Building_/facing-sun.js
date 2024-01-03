class Solution {
  countBuildings(nums, n) {
    let count = 1;
    let tall = -1;
    for (let i = 0; i < n - 1; i++) {
      tall = Math.max(nums[i], tall);

      if (tall < nums[i + 1]) {
        count++;
      }
    }
    return count;
  }
}

// time : O(n)

class Solution {
  countBuildings(nums, n) {
    let count = 1;
    let tall = nums[0];
    for (let i = 1; i < n; i++) {
      if (nums[i] > tall) {
        tall = nums[i];
        count++;
      }
    }
    return count;
  }
}

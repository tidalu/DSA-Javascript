var subZero = function (nums) {
  let max = 0;
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let presum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      presum += nums[j];
      if (presum == 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

console.log('1 - ', subZero([1, 0, -1, 1]));
console.log('2 - ', subZero([2, 2, 2, 2, 2]));
console.log('3 - ', subZero([-2, -1, -1, 1, 1, 2, 2]));

// time complexity is : O(n^2)
// space complexity: O(1)

var subZero = function (nums) {
  let max = 0;
  let mp = { 0: -1 };
  let presum = 0;
  for (let i = 0; i < nums.length; i++) {
    presum += nums[i];
    if (presum == 0) max = i + 1;
    if (mp.hasOwnProperty(presum)) {
      let preMax = i - mp[presum];
      max = Math.max(preMax, max);
    }
    mp[presum] = i;
  }
  return max;
};

// time complexity: O(n)
// space complexity: O(n)

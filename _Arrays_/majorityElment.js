/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let mp = {};

  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i]]) {
      mp[nums[i]]++;
    } else {
      mp[nums[i]] = 1;
    }
  }
  let res = [];
  for (let key in mp) {
    if (mp[key] > nums.length / 3) {
      res.push(parseInt(key));
    }
  }
  return res;
};

// time complexity is O(n)
// space complexity is O(n)

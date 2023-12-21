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

var majorityElement = function (nums) {
  let cnt1 = 0,
    cnt2 = 0;
  let el1, el2;

  for (let i = 0; i < nums.length; i++) {
    if (cnt1 == 0 && el2 != nums[i]) {
      cnt1 = 1;
      el1 = nums[i];
    } else if (cnt2 == 0 && el1 != nums[i]) {
      cnt2 = 1;
      el2 = nums[i];
    } else if (el == nums[i]) {
      cnt1++;
    } else if (el2 == nums[i]) {
      cnt2++;
    }
    cnt1--;
    cnt2--;
  }
  let res = [];
  cnt1 = 0;
  cnt2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (el1 !== undefined && el1 == nums[i]) cnt1++;
    if (el2 !== undefined && el2 == nums[i]) cnt2++;
  }

  let minni = Math.floor(nums.length / 3) + 1;

  if (cnt1 >= minni) res.push(el1);
  if (cnt2 >= minni) res.push(el2);
  return ls;
};

// intuition

// what is this doing is like, it takes 2 elements, why because, recuired count shoudl
// be more than n / 3 means if it was sait can be acceptable when it is equal to n / 3, we
// could take 3 elements, but it is asking more which measn, more than 33.33 %  if we take
// 34 % and multiply by 3 gets 102 higher than 100, so at max we could have 3 elements
// which can appear more than n / 3, so after that we are taking two initial elements,
//   adding when there are occurences else decrement the counters, so on, in the end
//   whatever elements are left, can be 2 or 1 or 0 we check if ahy of them are 0, then we
//   make the counters 0, then another looop, to ensure, then initalize an empty array,
//   and check again where the counters are more that the limit, if so we will push
//   elements to the newly initialized array, then just restun it, done,
//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let pos = nums.filter((x) => x >= 0);
  let neg = nums.filter((x) => x < 0);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < pos.length && j < neg.length) {
    nums[k++] = pos[i++];
    nums[k++] = neg[j++];
  }
  return nums;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-1, 1]));

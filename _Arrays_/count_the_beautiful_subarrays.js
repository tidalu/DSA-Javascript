/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (arr) {
  let n = arr.length;
  let count = 0;
  let xor = 0;
  let preXor = { 0: 1 };
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
    let diff = xor ^ 0;
    if (preXor[diff]) {
      count += preXor[diff];
    }
    preXor[xor] = (preXor[xor] | 0) + 1;
  }

  return count;
};

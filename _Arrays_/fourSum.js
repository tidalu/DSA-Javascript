var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let l = n - 1; l > i; l--) {
      if (l < n - 1 && nums[l] == nums[l + 1]) continue;
      let j = i + 1;
      let k = l - 1;
      while (j < k) {
        let presum = nums[i] + nums[j] + nums[k] + nums[l];

        if (presum > target) {
          k--;
        } else if (presum < target) {
          j++;
        } else {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          while (j < k && nums[j] === nums[++j]);
          while (j < k && nums[k] === nums[--k]);
        }
      }
    }
  }

  return result;
};

// aproach , what we are doing is
/**
 *
 * first we are sorting the array, then we are creating
 * four pointers, in the array, two for loop for the
 * beginning and the end of the array , insiide of the
 * second for loop, we are creating another two pointers
 * first in the beginning (after the first one) the second
 * one is in the end(after the last one), then we are
 * iterating with those, in every iteration we are checking
 * the presum if it is equla to target , if not, if it is
 * less than target we are incrementing  the j, the second
 * in the beginning, if greater than the target we are
 * decremening the k the first in teh end, why we are doing
 * so , is our arrya is sorted , the changes we are doing
 * make the presum less or more, then when presum is equal
 * to the target we are pushing the four element to the
 * result array as an array, then to skip the duplicate [i,
 * j, k ,l]  we  are telling all four pointers that somehow
 * if the next element is equal to the previous continue,
 * that is it, after these loop we are just retuning the
 * result .
 */

// time complexity : O(nlogn) + O(n^3)
// space complexity: O(m)  where m is the number of the quadruplets

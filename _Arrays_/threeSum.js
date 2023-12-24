/**
 * @param {string} s
 * @return {number}
 */
var threeSum = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);

          set.add(temp.join(','));
        }
      }
    }
  }
  let array = Array.from(set);
  array = array.map((x) => x.split(/,/).map((x) => parseInt(x)));
  return array;
};

console.log('1 - ', threeSum([-1, 0, 1, 2, -1, -4]));
console.log('2 - ', threeSum([0, 1, 1]));
console.log('3 - ', threeSum([0, 0, 0]));

// time complexity is extreeme : O(n^3 x logm)  where m is the number of triplets
// space complexity is : O(2m)  m is the number of triplets -> O(m)

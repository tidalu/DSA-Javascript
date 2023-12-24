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

// second solution

var threeSum = function (nums) {
  let seen = new Set();
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let set = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let target = -(nums[i] + nums[j]);

      if (set.has(target)) {
        let trvStr = String([nums[i], nums[j], target].sort((a, b) => a - b));
        if (!seen.has(trvStr)) {
          seen.add(trvStr);
          res.push([nums[i], nums[j], target]);
        }
      } else {
        set.add(nums[j]);
      }
    }
  }

  return res;
};

// aopproach

/**
 *
 * what we are doing here is, we are running two loops, and
 * we have a hashSet, we are stroing the elenments between
 * two i and j in the has set , and in every iteration we
 * are checking if the k which is -(nums[i]+nums[j]) is
 * available in the set, if yes we are taking the tird
 * elemtn, else we are ading the nums[j] value to the set,
 * which will be good , cuz if we add the value in every
 * iteration it could be able to get the duplicates also,
 * so u know , and we are having another set also , to
 * store the values of triplets, why ? we are not allowed
 * to return duplcate triplets, so, how we are detecting by
 * set is we are making the sorted string version of the
 * tripllet and we are askingset if it has , when it does
 * ntpo have we are pushing the triplet array to the result
 * array else we are adding the triplet string to the set,
 * that is the approcch,
 *
 *
 * time complexity: O(n^ log m)
 * space complexity: O(n x k)  k is the number of the triplets
 */

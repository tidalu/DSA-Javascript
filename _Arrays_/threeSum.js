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

// third solution is :
var threeSum = function (nums) {
  let res = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      }
    }
  }
  return res;
};

// aproach
/**
 * okay ,what wwe will do it is :
 * firstly we will sort the array, and initialize an result
 * array.
 * we wiil use two pointer approach , and we will have
 * three pointer, where first [i] one is in the beginning,
 * second one is  after the beginninh [j] = [i+1], the
 * third one is in the end,  and we will chech if the sum
 * of these are  equal to the zero, so, if the presum is
 * greater that the zero we decrement the k whihc is the
 * last, why, cuza the array is sorted, and to decreement
 * the pre sum we should lower the values,  else if the
 * presum is less than the zero we wiln increment the j++
 * which gets greater to reach to zero, and when presum is
 * equal to zero, we will push the triplet array to the
 * result aray, and also we should avoid having duplicate
 * triplets, that is why increment the i, j,  and decrement
 * the k to the next value which is not equal to previous ,
 * why firstly arrya is sorted if there is duplicate
 * elemend and if we do not skip the same values we will
 * have the same triplets returned , so j and k will have
 * this condition when presum is equal to zeor, and i when
 * always it is incremented ,
 */

//   time complexity : O(nlogn) + O(n^2)
//  space complexity : O(m)  m is the lendth of the result array the number of triplets

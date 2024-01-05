/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (N, x) {
  let low = 0;
  let high = x;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid ** N == x) return mid;
    if (mid ** N > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low - 1;
};

/// ...

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (N, x) {
  let low = 0;
  let high = x;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid ** N == x) return mid;
    if (mid ** N > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(mySqrt(4, 69));

//time O(logn)
// space O(1)
// we are running binary search, from 0 to x , and checking if the square of mid element is equal to x, if so return mid element, else we are checking if the mid^2 is greater or lesser that x, id it is llesser we are eliminating the left size cuz our ans is on the right , so on , we are eliminating the search space everytime, if after while loop, if it does not return anything, means x does not have its own srqt , so we are returnign the near one , it could happen that we could have x is 9, and first mid is 4 , for is not answer, it is greater that the answer so our ans is on the left so high = mid - 1, then our space is [0, 1, 2, 3 ], low is 0 high is 3 mid is 1, 1 is not our ans , it's square is less that target so our ans is on the right , so we again shrink the space, low = mid + 1, so now our state is [2, 3], mid is 2 which is less than our target , [2^2 < 9] so we eliminate the left side , so now our state is [3] , if we check 3^2 == 9, so return mid, at some case we could be asked that x is 10, and in the end out pos will be like low is 4, mid is 4, and high is 4, in that case we return low - 1, cuz the end pos is greater that target, so one before that was lower, we take that, it is the closest answer, done , if u like , upvote

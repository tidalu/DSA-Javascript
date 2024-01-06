/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let count = piles.reduce((c, b) => (c += Math.ceil(b / mid)), 0);
    if (count > h) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

// actually  what we are doing here is we  are getting the 1 till max of piles, cuz if max is 11 , if we want to each 11 per hour, it will be the same if we choose greate that 11,
// [3, 6, 7, 11]

// like  if we choose 1 per day we will eat the most hours, if we choose 11 it will be the least hours that we can eat, in the questiong they are asking what is the minimum value per hour, so we will run BS from 1 to Max we just find the hour in eevery iteration of mid,  then in the end  we will end up low is in the minimum count and high one beofre low, so we just return low

// time : O(n x logM)  where M is the max of the piles
// space O(1)

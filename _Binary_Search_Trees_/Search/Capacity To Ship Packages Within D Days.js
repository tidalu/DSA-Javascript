/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((s, v) => s + v, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let dayC = 0;
    let count = 1;
    for (let i of weights) {
      dayC += i;
      if (dayC > mid) {
        count++;
        dayC = i;
      }
    }
    if (count <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

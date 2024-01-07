/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) return -1;
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    let ajd = 0;
    for (let i of bloomDay) {
      if (mid >= i) {
        ajd++;
      } else {
        count += Math.floor(ajd / k);
        ajd = 0;
      }
    }
    count += Math.floor(ajd / k);

    if (count >= m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

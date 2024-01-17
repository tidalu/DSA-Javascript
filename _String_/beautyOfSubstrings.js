/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let mp = new Map();

    for (let j = i; j < s.length; j++) {
      const current = s[j];
      mp.set(current, (mp.get(current) || 0) + 1);

      let frequence = Array.from(mp.values());
      max = Math.max(...frequence);
      min = Math.min(...frequence);

      count += Math.max(0, max - min);
    }
  }

  return count;
};

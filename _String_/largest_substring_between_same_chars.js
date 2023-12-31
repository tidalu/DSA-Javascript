/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let maxDist = -1;

  for (let i = s.length - 1; i > 0; i--) {
    let char = s[i];
    let regex = new RegExp(char);
    let match = regex.exec(s);
    if (match) {
      let ahead = i - (match.index + 1);
      if (ahead > maxDist) maxDist = ahead;
    }
  }

  return maxDist;
};

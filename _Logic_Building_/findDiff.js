/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return String.fromCharCode((Array.from(t).map(x => x.charCodeAt(0)).reduce((acc, v) => acc + v, 0))-( Array.from(s).map(x => x.charCodeAt(0)).reduce((acc, v) => acc + v, 0)))
  }
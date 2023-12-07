/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    var n = num.length
  for(let i = n-1; i >= 0; i--) {
      let dig = +num[i]
      if(dig % 2 != 0) {
          return num.slice(0, i+1)
      }   
  }

  return ""
};

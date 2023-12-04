/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    var count = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"];
    for(let n of count) {
      console.log()
      if(num.includes(n)) {
        return n
      }
    }
  
  return ""
};
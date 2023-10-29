/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var arr = Array.from(s).filter(x => x.match(/^[a-zA-Z0-9]+$/))
    console.log(arr)
    return  JSON.stringify(arr).toLowerCase() === JSON.stringify(arr.reverse()).toLowerCase()
  };
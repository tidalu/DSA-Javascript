/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function (n) {
    var id = [];
    var stat = true;
    while (n >= 7) {
      id.push(7);
      n -= 7;
    }
  
    function sum(start, end) {
      let result = 0;
  
      for (let i = start; i <= end; i++) {
        result += i;
      }
  
      return result;
    }
  
    id.push(n);
    var res = 0;
    var inc = 1;
    for (let i = 0; i < id.length; i++) {
      res += sum(inc, i + id[i]);
      inc++;
    }
    return res;
  };
  
  console.log(totalMoney(20));
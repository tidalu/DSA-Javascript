/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    var f1 = 0,
        f2 = 1;
    
    for(let i = 0 ; i < n; i++) {
      var temp = f1 + f2;
      f1= f2;
      f2 = temp;
    }
      return f2;
  };
  
  

//  var climbStairs = function(n) {
//    var f1 = 0,
//        f2 = 1, 
//        i = 0;
//    while ( i < n) {
//          i++;
//          var temp = f1 + f2;
//          f1= f2;
//          f2 = temp;
//    }
//      return f2;
//  };
 
 
//  console.log(climbStairs(5))
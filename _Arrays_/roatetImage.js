function solution(a) {
    var arr = []
    for(i = 0; i < a.length ; i++) {
      var temp = []
        for(j = 0; j < a[i].length ; j++)  {
            temp.unshift(a[j][i])
        }
      arr = arr.concat([temp])
    }
    
    return arr
}


var a = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]

console.log(solution(a))


function solution(a) {
    var N = a.length
      for (let i = 0; i < parseInt(a.length/2); i++) {
          for (let j = i ; j  < a.length - 1- i; j++) {
              var temp = a[i][j];
                  a[i][j] = a[N - 1 - j][i];
                  a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
                  a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
                  a[j][N - 1 - i] = temp;
          }
      }
  
      return a;
  }
  
  var a = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  
  console.log(solution(a));
  
  
  function solution(a) {
    return a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
  }


  var rotate = function(matrix) {

    for(let i = 0; i < matrix.length; i++) {
    var left = 0;
    var right = matrix.length - 1;
    while (left <= right ) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]
      left++;
      right --;
    }
    }
var last = matrix.length-1;
for(let i = 0 ; i < last; i++) {
    let  k =last -1-i;
  for(let j = k; j >=0; j--) {
    [matrix[i][j], matrix[last-j][last-i]] = [matrix[last-j][last-i], matrix[i][j]]
    
  }
}
return matrix
};
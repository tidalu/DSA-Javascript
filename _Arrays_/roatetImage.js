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
/**
 * @param {number} numRows
 * @return {number[][]}
 */

// first type of problem is print the pascal's triangle
var generate = function (numRows) {
  var ans = [];
  for (let i = 1; i <= numRows; i++) {
    let arr = new Array(i).fill(1);
    ans.push(arr);
  }
  for (let i = 1; i < numRows - 1; i++) {
    for (let j = 0; j < ans[i].length - 1; j++) {
      ans[i + 1][j + 1] = ans[i][j] + ans[i][j + 1];
    }
  }
  return ans;
};

// second type of problem is print the nth row of triangle
function generate(row) {}

// third type of problem is printh the mth elemnt in the nth row

function generate1(n, m) {
  // for such problem like in math, there is a formula nCr like in our condition it is nCm = n!/(m! * (n-m)!) and it goes like (n * (n-1) *...*(n-m)) / r!
  let prod = 1;

  for (let i = 0; i < m; i++) {
    prod *= n - i;
    prod /= i + 1;
  }

  return prod;
}
console.log(generate1(4, 2));

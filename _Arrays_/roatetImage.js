function solution(a) {
  var arr = [];
  for (i = 0; i < a.length; i++) {
    var temp = [];
    for (j = 0; j < a[i].length; j++) {
      temp.unshift(a[j][i]);
    }
    arr = arr.concat([temp]);
  }

  return arr;
}

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(solution(a));

function solution(a) {
  var N = a.length;
  for (let i = 0; i < parseInt(a.length / 2); i++) {
    for (let j = i; j < a.length - 1 - i; j++) {
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
  [7, 8, 9],
];

console.log(solution(a));

function solution(a) {
  return a.map((row, rowIndex) => a.map((val) => val[rowIndex]).reverse());
}

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    var left = 0;
    var right = matrix.length - 1;
    while (left <= right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
  var last = matrix.length - 1;
  for (let i = 0; i < last; i++) {
    let k = last - 1 - i;
    for (let j = k; j >= 0; j--) {
      [matrix[i][j], matrix[last - j][last - i]] = [
        matrix[last - j][last - i],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};

// strivers solution :

function rotate(matrix) {
  let rows = matrix.length;
  let ans = Array.from({ length: rows }, () =>
    Array.from({ length: rows }).fill(0)
  );
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      ans[j][rows - 1 - i] = matrix[i][j];
    }
  }

  return ans;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function rotate(matrix) {
  let n = matrix.length;
  // O(n/2*n/2)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (i !== j) {
        [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
      }
    }
  }
  // O(n*n/2)
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

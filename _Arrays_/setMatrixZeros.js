let zeros = function (m) {
  let n = m.length;
  let r = m[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == 0) {
        markRow(i, m);
        markCol(j, m);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == -1) {
        m[i][j] = 0;
      }
    }
  }

  return m;
};

function markRow(i, m) {
  for (let j = 0; j < m.length; j++) {
    if (m[i][j] != 0) {
      m[i][j] = -1;
    }
  }
}
function markCol(j, m) {
  for (let i = 0; i < m.length; i++) {
    if (m[i][j] != 0) {
      m[i][j] = -1;
    }
  }
}

// console.log(
//   zeros([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

// this is brute force approach
// time complexity : (nxm)x (n+m) + (n x m)  ~~  O(n^3)

let zeros1 = function (m) {
  let r = m.length;
  let c = m[0].length;
  let rows = new Array(r).fill(0);
  let cols = new Array(c).fill(0);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (m[i][j] == 0) {
        rows[i] = 1;
        cols[j] = 1;
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (rows[i] == 1 || cols[j] == 1) {
        m[i][j] = 0;
      }
    }
  }

  //   console.log(rows, cols);
  return m;
};

// time complexity : O( n x m )
//  space complexity : O( n x m )

let zeros2 = function (m) {
  let r = m.length;
  let c = m[0].length;
  let col0 = 1;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (m[i][j] == 0) {
        m[i][0] = 0;
        if (j != 0) {
          m[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = r - 1; i > 0; i--) {
    for (let j = c - 1; j > 0; j--) {
      if (m[i][j] != 0) {
        if (m[i][0] == 0 || m[0][j] == 0) {
          m[i][j] = 0;
        }
      }
    }
  }

  if (m[0][0] == 0) {
    for (let j = 0; j < c; j++) {
      m[0][j] = 0;
    }
  }

  if (col0 == 0) {
    for (let i = 0; i < r; i++) {
      m[i][0] = 0;
    }
  }

  //   console.log(rows, cols);
  return m;
};

console.log(
  zeros2([
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 1],
  ])
);

// time complexity is O(m x n)
// space complexity is O(1)

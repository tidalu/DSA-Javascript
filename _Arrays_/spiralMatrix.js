/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  let result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let i = 0,
    j = 0;

  while (result.length < rows * cols) {
    while (j < cols && matrix[i][j] !== undefined) {
      result.push(matrix[i][j]);
      matrix[i][j] = undefined;
      j++;
    }
    j--;

    i++;
    while (i < rows && matrix[i][j] !== undefined) {
      result.push(matrix[i][j]);
      matrix[i][j] = undefined;
      i++;
    }
    i--;

    j--;
    while (j >= 0 && matrix[i][j] !== undefined) {
      result.push(matrix[i][j]);
      matrix[i][j] = undefined;
      j--;
    }
    j++;

    i--;
    while (i >= 0 && matrix[i][j] !== undefined) {
      result.push(matrix[i][j]);
      matrix[i][j] = undefined;
      i--;
    }
    i++;

    j++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]

// second solution

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};

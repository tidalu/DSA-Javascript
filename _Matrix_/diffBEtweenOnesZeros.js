/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  let oneRow = [];
  let oneCol = [];
  let rowSize = grid.length;
  let colSize = grid[0].length;
  var res = Array.from({ length: rowSize }, () =>
    Array.from({ length: colSize }, () => 0)
  );

  for (let i = 0; i < rowSize; i++) {
    let count1 = 0;
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1) {
        count1++;
      }
    }
    oneRow.push(count1);
  }

  for (let j = 0; j < colSize; j++) {
    let count2 = 0;
    for (let i = 0; i < rowSize; i++) {
      if (grid[i][j] === 1) {
        count2++;
      }
    }
    oneCol.push(count2);
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      res[i][j] =
        oneRow[i] + oneCol[j] - (rowSize - oneRow[i]) - (colSize - oneCol[j]);
    }
  }
  return res;
};

// console.log(
//   onesMinusZeros([
//     [0, 1, 1],
//     [1, 0, 1],
//     [0, 0, 1]
//   ])
// );

console.log(
  onesMinusZeros([
    [1, 1, 1],
    [1, 1, 1],
  ])
);

// time complexity :initializing res array takes O(rowSize*colSize)
// counting ones takes O(rowSize, colSize)
// filling the res array takes also O(rowSize, colSize)
// so O(3(rowSize*colSize)) we do not take constanta so time complexity is
// O(rowSize * colSize)

// space complexity :

// res array O(rowSize*colSize) space
// oneRow and oneCol arrays: These arrays store the count of ones in each row and each column, respectively. Both take O(max(rowSize, colSize)) space.

// Variables (rowSize, colSize, count1, count2, i, j): These variables take constant space.
// so : O(rowSize * colSize)

// second optimized solution

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  let rowSize = grid.length;
  let colSize = grid[0].length;
  let oneRow = new Array(rowSize).fill(0);
  let oneCol = new Array(colSize).fill(0);

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      let el = grid[i][j];
      oneRow[i] += el;
      oneCol[j] += el;
    }
  }
  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      grid[i][j] =
        oneRow[i] + oneCol[j] - (rowSize - oneRow[i]) - (colSize - oneCol[j]);
    }
  }
  return grid;
};

// console.log(
//   onesMinusZeros([
//     [0, 1, 1],
//     [1, 0, 1],
//     [0, 0, 1]
//   ])
// );

console.log(
  onesMinusZeros([
    [1, 1, 1],
    [1, 1, 1],
  ])
);

// time complexity  :
//  it is not  changes after even optimized, so O(rowSize * colSize)

// space complexity :

// it is now optimized, we are not using extra space to return , so we are taking in the wors case O(rowSize) ,  O(colSize)  in the wors case, like which one is bigger, os as it is . done

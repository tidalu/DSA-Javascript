var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set(),
          col = new Set(),
          box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let _row = board[i][j];
        let _col = board[j][i];
        let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
        
        if (_row != '.') {
          if (row.has(_row)) return false;
          row.add(_row);
        }
        if (_col != '.') {
          if (col.has(_col)) return false;
          col.add(_col);
        }
        
        if (_box != '.') {
          if (box.has(_box)) return false;
          box.add(_box);
        } 
      }
    }
    return true
  };

  // space com:O(1) because the Sets (row, col, and box) have a constant size, and their maximum size is capped at the number of unique elements in a row, column, or box (9 in this case).

  // time com: O(1) because the loops iterate over a constant-size board (always 9x9). Therefore, the time complexity is independent of the input size.

  // the idead is to check every row, column, and every 3x3 box is there are any duplicates, return false, else true


  // my approach is also based on the same idea, but it is  a bit longer way 



  var isValidSudoku = function(grid) {
    var res = []
  
  var a = grid.map((el, idx) => grid.map(val => val[idx]))
  var gridSize = 9;
  var subMatrixSize = 3
  var b = []
  for (let i = 0; i <= gridSize - subMatrixSize; i += subMatrixSize) {
    for (let j = 0; j <= gridSize - subMatrixSize; j += subMatrixSize) {
        const subMatrix = [];
        for (let x = i; x < i + subMatrixSize; x++) {
            for (let y = j; y < j + subMatrixSize; y++) {
                subMatrix.push(grid[x][y]);
            }
        }
        b.push(subMatrix);
    }
}
  
  res = [grid, a, b]

  
  
  res = res.flatMap((val) => val.map(x => x.filter(v => v != "."))).map(val=> {
    if(val.join('') == [...new Set(val)].join('')) {
      return true
    } else {
      return false
    }
  } ).every(x => x == true)
  return res
};


// Time Complexity:
// Mapping and Flattening:

// The grid.map operation is O(n^2), where n is the size of the grid.
// flatMap operation is also O(n^2) since it involves flattening the mapped arrays.
// Nested Loops:

// The nested loops iterate through the grid, and each iteration involves constant time operations.
// The total number of iterations is O(n^2), where n is the size of the grid.
// Filter and Map:

// The filter and map operations inside the flatMap also take O(n^2) time since they process each element of the grid.
// Set Operations:

// The Set operations inside the loops and the final every operation are likely to take constant time for each iteration.
// Combining these, the overall time complexity is O(n^2), where n is the size of the grid.




// Space Complexity:
// Arrays and Sets:

// The res array stores three references to arrays, grid, a, and b. This operation takes O(1) space.
// The b array stores references to the submatrices, and its size is O(n^2).
// The filter and map operations create new arrays with the filtered elements, each of size O(n^2).
// Sets and Join Operations:

// Sets and join operations also involve some additional space, but they are relatively small and constant.
// Combining these, the overall space complexity is O(n^2).
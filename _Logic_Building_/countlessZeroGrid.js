/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives_ = function (grid) {
    var res = [],
    count = 0;
    for (var i = 0; i < grid.length; i++) {
        res = res.concat(grid[i])
    }

    res.forEach(x => {
        if(x < 0){
            count++;
        }
    })
    return count
    
};


// second better solution to learn iteration grid without ^2  


var countNegatives = function(grid) {
    let n = grid.length, m = grid[0].length;
    let i = 0, j = m - 1, count = 0;
    while(i < n && j >= 0) {
        if(grid[i][j] < 0) {
            count += n - i;
            j--;
        }
        else
            i++;
    }
    return count;
};


console.log(countNegatives([[1, 2, 3], [4, 0 ,-3], [-1, 3, 5]]))
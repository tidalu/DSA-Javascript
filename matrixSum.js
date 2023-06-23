
function solution(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                matrix.forEach(row => row[0] = 0);
            } else {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}


console.log(solution([[0, 1, 2, 3], [1,2, 0, 4], [5, 4, 3, 2]]))

// unfinished yet
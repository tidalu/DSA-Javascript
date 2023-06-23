
function solution(matrix) {
    let sum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if(matrix[i][j] !== 0) {
                sum += matrix[i][j];
            } else {
                break;
            }
        }
    }
    return sum;
}


console.log(solution([[0, 1, 2, 3], [1, 2, 0, 4], [5, 4, 3, 2]]))

// unfinished yet
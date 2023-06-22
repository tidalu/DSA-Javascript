function solution(matrix) {
    let sum = 0;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] !== 0) {
                sum += matrix[i][j];
                console.log(sum);
            }
        }
    }
    return sum;
}
console.log(solution([[0, 1, 2, 3], [1,2, 3, 4], [5, 4, 3, 2]]))

// unfinished yet
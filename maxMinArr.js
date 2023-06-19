const maxMin = function (nums) {
    return {max: Math.max(...nums), min: Math.min(...nums)}
}

console.log(maxMin([4, 2, 5, 3, 2, 97, 11 , 54, 0]))
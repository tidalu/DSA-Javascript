function solution(num) {
    var first = 0,
        second = 1,
        arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(first)
        var temp = first;
        first = second;
        second = (temp + second);
    }

    return arr;
}


console.log(solution(8))



function checkFibonacci(array) {
    for (var i = 0; i < array.length; i++) {
        if (i + 2 < array.length) {
            if (array[i] + array[i + 1] !== array[i + 2]) {
                return false;
            }
        }
    }
    return true;
}



console.log(checkFibonacci([0, 1, 1, 2, 3]))
console.log(checkFibonacci([1, 1, 2, 3, 5]))
console.log(checkFibonacci([2, 3, 5, 8, 13]))
console.log(checkFibonacci([0, 1, 1, 2, 4]))
console.log(checkFibonacci([1, 2, 3, 5, 8, 13, 21]))
console.log(checkFibonacci([1, 1, 2, 4, 7]))
console.log(checkFibonacci([2, 3, 5, 7, 12]))
console.log(checkFibonacci([0, 1, 1, 3, 4, 7, 11]))
console.log(checkFibonacci([1, 2, 4, 7, 12, 20]))
console.log(checkFibonacci([1, 1, 2, 3, 6, 9, 15]))
function solution(inputArray) {
    var long = [];
    arr = inputArray.map(x => x.length);
    arr.forEach((x, idx) => Math.max(...arr) == x ? long.push(inputArray[idx]) :-1);
    return long;
}


console.log(solution(["aba",
    "aa",
    "ad",
    "vcd",
    "aba"]));
function solution(n) {
    if(n == 1) return 9;
    return parseInt('9' + solution(n-1))
}


console.log(solution(3));

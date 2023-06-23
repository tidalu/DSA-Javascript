function solution(a) {
    var first = 0,
        second = 0;
    for (var i = 0; i < a.length; i++) {
        i % 2 == 0 ?
            first += a[i] :
            second += a[i]
    }
    return [first, second]
}
console.log(solution([50, 60, 60, 45, 70]))
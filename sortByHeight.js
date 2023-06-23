function solution(a) {
    var count = 0;
    const arr = a.filter(x => x !== -1).sort((a, b) => a - b);
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = arr[count];
            count++;
        }
    }
    return a;
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
function solution(n) {
    var obj = { 
        'firstHalf': 0,
        'secondHalf': 0 
    };
    
    var arr = Array.from(String(n), x => parseInt(x));
    for (let i = 0; i < arr.length ; i++) {
        if (i < Math.ceil(arr.length / 2)) {
            obj.firstHalf += arr[i];
        } else {
            obj.secondHalf += arr[i];
        }
    }
    return obj['firstHalf'] === obj['secondHalf']
}
console.log(solution(1321))
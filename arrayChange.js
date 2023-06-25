function solution(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if(inputArray[i] >= inputArray[i+1]){
            sum += ((inputArray[i]+1) - inputArray[i+1])
            inputArray[i+1] = (inputArray[i] + 1);
        }
    }
    return sum
    
}


console.log(solution([1, 1, 1]))
console.log(solution([2, 1, 10, 1]))
console.log(solution([-1000, 0, -2, 0]))
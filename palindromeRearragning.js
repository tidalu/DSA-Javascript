function solution(inputString) {
    var charCount = {};

    for (var char of inputString) {
        if (!charCount.hasOwnProperty(char)) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    var oddCount = 0;

    for (var count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}


console.log(solution("aabb"))
console.log(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"))
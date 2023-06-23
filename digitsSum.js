function solution(number) {
    if (number < 10) {
        return number;
    }   
        const lastDigit = number % 10;
        const remainingDigits = Math.floor(number / 10);
        return lastDigit + solution(remainingDigits);
    
}

console.log(solution(343));
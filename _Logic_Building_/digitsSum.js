// first version
// function solution(number) {  // using recursion
//     if (number < 10) {
//         return number;
//     }   
//         const lastDigit = number % 10;
//         const remainingDigits = Math.floor(number / 10);
//         return lastDigit + solution(remainingDigits);
// }


    // second version
// function solution(number){
//     var newArr = Array.from(String(number).split(''), x => parseInt(x))  // iterating the array
//     var sum = 0; 
//     for(x of newArr){
//         sum += x;
//     }
//     return sum;

// }


// third version
function solution(number){
    var length = String(number).split("").length;  // simple way
    var sum = 0;
    for(var i = 0; i < length; i++){
        sum += (number % 10);
        number = (Math.floor(number/10));
    }
    return sum;
}



console.log(solution(343));
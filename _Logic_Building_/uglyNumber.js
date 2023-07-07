/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n <= 0){
        return false;
    }
    while(n%2 === 0){
        n /= 2;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 5 === 0) {
        n /= 5;
    }

    return n === 1;
};

console.log(isUgly(6))
console.log(isUgly(1))
console.log(isUgly(14))
console.log(isUgly(8))
console.log(isUgly(7))
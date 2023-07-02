/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    var sum = 0;
    var a = [[Math.floor(n / 3), 3], [Math.floor(n / 5), 5], [Math.floor(n / 7), 7]];

    a.forEach((x) => {
        var firstTerm = x[1];
        var lastTerm = x[0] * x[1];
        var numberOfTerms = Math.floor(n / x[1]);
        sum += (numberOfTerms / 2) * (firstTerm + lastTerm);
    });

    return sum;
};


console.log(sumOfMultiples(20));
console.log(sumOfMultiples(7));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(9));
console.log(sumOfMultiples(15));

console.log("--------")
// for one test case of the leetcode , i do not know, it did not work when  n = 15, so iterating way below

var sumOfMultiples1 = function (n) {
    var sum = 0;
    for(var i = 1; i <= n ; i++){
        if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
            sum += i;
        }
    }
    return sum;
};

console.log(sumOfMultiples1(20));
console.log(sumOfMultiples1(7));
console.log(sumOfMultiples1(10));
console.log(sumOfMultiples1(9));
console.log(sumOfMultiples1(15));
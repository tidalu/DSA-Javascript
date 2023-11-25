/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    var basek = (n).toString(k)
    var sum = 0;
    while(basek > 0) {
        sum+= basek % 10;
        basek = Math.floor(basek / 10)
    }
    return sum
};

console.log(sumBase(34, 6)) // 9
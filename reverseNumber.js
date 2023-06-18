
var reverse = function(x) {
    var arr = Array.from(String(x));
    arr.includes('-') ? sign = '-' : sign = '';
    arr.map(x => parseInt(x)).filter( x => !isNaN(x));
    arr.push(sign);
    var returnVal  =  parseInt(arr.reverse().join(''));
    return (returnVal  > Math.pow(-2, 31) && returnVal < Math.pow(2, 31) - 1) ? returnVal : 0
};

console.log(reverse(-213))
console.log(reverse(123))
console.log(reverse(120))
console.log(reverse(1534236469))

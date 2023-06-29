var plusOne_ = function(digits) {
    var n = BigInt(digits.join(''))+1n
    return [n].toString().map(Number)
};


// second version 

var plusOne = function(digits) {
    return [...(BigInt(digits.join(''))+1n).toString()].map(Number)
};
console.log(plusOne([1, 2, 3]))
console.log(plusOne([9, 9, 9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
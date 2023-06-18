
var reverse = function(x) {
    var arr = Array.from(String(x), x => parseInt(x));
    arr.filter( x => !isNaN(x));
    return parseInt(arr.reverse().join(''));
};


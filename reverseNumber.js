
var reverse = function(x) {
    var arr = Array.from(String(x));
    var sign ;
    console.log('this', arr.reduce( (acc, curr, idx) => curr == '-' ? sign = curr : acc[idx] = parseInt(x), []));
    const newA = arr.reduce((acc, curr, idx) => curr == '-' ? sign = curr : acc[idx] = parseInt(x), []);
    console.log(aRR, 'new');
    // newA.filter( x => !isNaN(x));
    // return sign +  parseInt(newA.reverse().join(''));

    // return arr;
};

console.log(reverse(-213))
console.log(reverse(123))
console.log(reverse(120))

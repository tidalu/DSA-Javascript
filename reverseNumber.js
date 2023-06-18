var reverse = function(x) {
    var newA = [];
    Array.from(x).forEach(x => {
        x > 0 ? newA.push(x) : newA.push(x*(-1));
    })
    for( el of newA){
        var tric ;
        tric = el;
        el = newA.at(-1);
        newA.at(-1) = tric ;
    }
    return newA.join('');
};
console.log(reverse(123))
console.log(reverse(-321))
console.log(reverse(210))
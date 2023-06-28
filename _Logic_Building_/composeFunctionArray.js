/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    var res = (x) => functions.reverse().reduce((arg, fn) => fn(arg), x)
    return res
};
var res = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(res(4))
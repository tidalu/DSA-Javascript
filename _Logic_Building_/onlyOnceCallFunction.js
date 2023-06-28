/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    var res, confirm = false;
    return function (...args) {
        if (!confirm) {
            res = fn(...args);
            confirm = true;
        }
        else{
            return undefined
        }
        return res;
    }
}




let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = (init) => {
    var temp = init;
    function inde(val) {
        return temp + val;
    }
    return {
        decrement: () => {
            temp = inde(-1);
            return temp
        },
        increment: () => {
            temp = inde(+1);
            return temp
        },
        reset: () =>  temp = init
    }
}

const counter = createCounter(0);
const counter1 = createCounter(5);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0


console.log('hello')
console.log(counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)
    for(var i = 1; i < arr.length-1; i++){
        if(arr[i+1] - arr[i] != arr[i] - arr[i-1]){
            return false
        }
    }
    return true

};

console.log(canMakeArithmeticProgression([5, 1, 3]))
console.log(canMakeArithmeticProgression([1,2,4]))
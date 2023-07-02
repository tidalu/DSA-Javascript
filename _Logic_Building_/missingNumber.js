/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {  //  Array.from({ length: n }, (_, i) => i);
    var max = Math.max(...nums) + 1
    var newArr = Array
                    .from({ length: max }, (_, i) => i)
    if ((max) == nums.length) return max
    else {
        return  newArr
                    .reduce((sum, x) => sum + x, 0)
                    - nums
                        .reduce((sum, x) => sum + x, 0)
    }

};


console.log(missingNumber([0, 1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
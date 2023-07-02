
var moveZeroes = function (nums) {
    var nonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }

        // while (nums[i] !== 0) {
        //     nums[nonZeroIndex] = nums[i]
        //     nonZeroIndex++
        // } // sucks for a moment, i should've known, while loops stop iterating whenever it came to 0, as soon as it checks for value 0 then it will go with the rest of the for loop, but if else checks for all elements

    }

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
}

console.log(moveZeroes([4, 3, 0, 2, 6, 0, 7, 0, 0]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0, 1, 0, 3, 12]))

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

// second approach 

var moveZeroes = function(nums) {
    var count = 0;
    var i = 0;

    while (i < nums.length) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            count++;
        } else {
            i++;
        }
    }

    while (count > 0) {
        nums.push(0);
        count--;
    }

    return nums;
};


// Time Complexity: O(N), N = size of the array.
// Reason: We have used 2 loops and using those loops, we are basically traversing the array once.

// Space Complexity: O(1) as we are not using any extra space to solve this problem.
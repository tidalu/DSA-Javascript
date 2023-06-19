var removeDuplicates_ = function (nums) {
    const a = new Set();
    nums.forEach(x => {
        if (!a.has(x)) {
            a.add(x)
        }
    })
    var modif = Array.from(a);
    return modif.length;
};
var removeDuplicates__ = function (nums) {
    var a = [];
    nums.forEach(x => {
        if (!a.includes(x)) {
            a.push(x);
        }
    })
    nums = a;
    return nums.length;
};


var removeDuplicates___ = function (nums) { // this is acceptable version
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}



function removeDuplicates(nums) { // this is AI version , my two versions above are returning the same result but in leetcode it is not confirming correct
    if (nums.length === 0) {
        return 0;
    }
    let index = 1;
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== prev) {
            nums[index] = nums[i];
            prev = nums[i];
            index++;
        }
    }
    return index;
}
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// Example usage
// const nums = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];
// const uniqueCount = removeDuplicates(nums);
// console.log("Modified nums:", nums.slice(0, uniqueCount));
// console.log("Return value:", uniqueCount);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert_ = function (nums, target) {
    var res = 0;
    if (nums.indexOf(target) != -1) {
        res = nums.indexOf(target);
    } else {
        for (var i = 0; i < nums.length; i++) {
            if (nums[nums.length - 1] < target) {
                res = nums.length;
            }
            else {
                while (nums[i] >= target) {
                    res = i;
                }
            }
        }
    }
    return res
};  // it's time complexity is wtf 

// so with binary search 

var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

// third way 


var searchInsert_ = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target)
    return [...nums, target].sort((a, b) => a - b).indexOf(target)
};


console.log(searchInsert([1, 2, 3, 4], 3))
console.log(searchInsert([1, 3, 5, 6], 7))
// var arr = [1, 22,3, 4, 3]
// console.log(arr.indexOf(2))
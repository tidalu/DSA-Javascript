var threeSum_ = function (nums) {
    var newArr = [];
    if (nums.length < 3) return [];

    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    var sum = nums[i] + nums[j] + nums[k];
                    if (sum === 0) {
                        var triplet = [nums[i], nums[j], nums[k]];
                        triplet.sort((a, b) => a - b); // Sort the triplet in ascending order
                        newArr.push(triplet);
                    }
                }
            }
        }
    }

    var uniqueArr = [];
    for (var i = 0; i < newArr.length; i++) {
        var found = false;
        for (var j = 0; j < uniqueArr.length; j++) {
            if (JSON.stringify(newArr[i]) === JSON.stringify(uniqueArr[j])) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueArr.push(newArr[i]);
        }
    }

    return uniqueArr;
};


// version 2

var threeSum = function (nums) {
    var result = [];
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b); 
    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { 
            var left = i + 1;
            var right = nums.length - 1;
            var target = -nums[i];

            while (left < right) {
                var sum = nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);


                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
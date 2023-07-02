/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var set = Object.create({})

    for(var i = 0; i < nums.length; i++){
        if(!set.hasOwnProperty(nums[i])){
            set[nums[i]] = 1
        }else{
            set[nums[i]]++
        }
    }
    console.log(set)
    return Object.entries(set)
                    .filter(([key, value]) => value == 1)
                    .map(([key, value]) => key)
                    .map(Number)[0]

    
};

// second version
function singleNumber_(nums) {
    return nums.reduce((res, num) => res ^ num,0)
};


console.log(singleNumber([1, 3, 6, 3, 6]));
console.log(singleNumber([1,1, 5, 3, 6, 3, 6]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
var removeElement = (nums, val) => {
    var newArr = nums.filter(x => x != val);
    var k = newArr.length;
    return k;
};

// var removeElement = function (nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     nums.length = k;
//     console.log(nums)
//     return k;
// };

console.log(removeElement([0,1,2,2,3,0,4,2]
    , 2));
// 0,, 1, 3, 0, 4,------ 5, 
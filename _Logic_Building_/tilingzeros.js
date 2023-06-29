/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros_ = function (num) {
    var nums = Array.from(num, x => parseInt(x));
    console.log('nums' , nums.length)

    for(var i = nums.length-1; i>=0; i--){
        if(nums[i] == 0){
            nums.pop()
        }else{
            break;
        }
    }
    return nums.join('')
};

// version 3

var removeTrailingZeros = function (s) {
    return s.replaceAll(/[0]+$/g, '')
};

console.log(removeTrailingZeros("23000000000000000000000000000000000000000450500000000"));
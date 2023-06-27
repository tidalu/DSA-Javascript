var rotate = function (nums, k) {
    var res = [],
        place = 0;
    if (k >= 0) {
        for (var i = 0; i < nums.length; i++) {
            place = i + k
            if(place >= nums.length){
                place = place - (k + 1)
                res[place] = nums[i]
            }
            res[place] = nums[i]
            
        }
    }
    return res; // complete
};


console.log(rotate([1,2,3,4,5,6,7], 3))
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
// for (let i = 0; i < nums.length - 2; i++) {
//     var num = Number(nums.join(''))
//     var save = nums.slice();
//     var temp = save[i + 1]
//     save[i + 1] = save[i + 2]
//     save[i + 2] = temp

//     console.log(nums)

//     if (num < Number(save.join(''))) {
//         return Number(save.join(''));
//     } else {
//         var temp = nums[i]
//         nums[i] = nums[i + 1]
//         nums[i + 1] = temp
//         if(num < Number(nums.join('')))
//             return Number(nums.join(''))
//         else{
//             return Number(nums.reverse().join(''))
//         }
//     }
// }  // not correct for all the time, 
// };


// var nextPermutation = function (nums) {

// }

// console.log(nextPermutation([1, 2, 3]))
// console.log(nextPermutation([2, 3, 1]))// -> 213 
// console.log(nextPermutation([1, 1, 5]))
// console.log(nextPermutation([3, 2, 1]))
// console.log(nextPermutation([5, 4, 3]))


// 6 5 8 7 3 2  -> 6 5 8 7 2 3 
// 

// 1 2 3 
// 132
// 213
// 132
// 312
// 321

// 1 2 3 4  
// 1 2 4 3
// 1 3 2 4 -> 
// 1 3 4 2 
// 1 4 2 3 -> 1 4 3 2 -> 1 4 2 3 
// 1 4 3 2 ->  1 4 2 3 -> 1 2 3 4 -> 1 2 4 3 -> 2 1 3 4


// 2 4 3 1 
// 2 1 3 4


// // ---->


// [1 2 3 4] <> [4 3 2 1]

// // n! => 4!/2 </>
function permutations(nums) {
    var permutations = [],
        length = (nums.length),
        currentPermutation = 0,
        nextPermutation = 0,
        returnValue = 1,
        firstPermutation = nums.sort((x, y) => x - y);

    for (let i = 1; i <= length; i++) {
        returnValue *= i;
    }

    for (let i = 0; i < returnValue; i++) {
        let c = firstPermutation.slice();
        permutations.push(c);
        nextPermutation = getNextPermutation(firstPermutation);
    }

    function getNextPermutation(array) {
        let i = array.length - 2;
        while (i >= 0 && array[i + 1] <= array[i]) {
            i--;
        }
        if (i >= 0) {
            let j = array.length - 1;
            while (j >= 0 && array[j] <= array[i]) {
                j--;
            }
            swap(array, i, j);
        }
        reverse(array, i + 1);
        return array;
    }

    function reverse(array, start) {
        let i = start,
            j = array.length - 1;
        while (i < j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return permutations;
}

console.log(permutations([3, 2, 5]))

/// next permutation |||<<<<>>>>>|||－O－(o゜▽゜)o☆
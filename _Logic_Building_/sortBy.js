/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.


var sortBy = function (arr, fn) {
    var sortedArr = arr.sort(fn()) // (a, b) => a - b
    return sortedArr;
};

console.log(sortBy([5, 4, 1, 2, 3], ((x) => x)))
// function rev(arr) {
//     if(arr.length == 0) return [];
//     else {
//         return arr.slice(-1).concat(rev(arr.slice(0, -1)))
//     }
// }

// console.log(rev([1, 2,3,4, 5]))

// function rec(arr){
//     var copy = arr.slice(0)
//     var n = arr.length 
//     for(i = 0; i < arr.length / 2; i++) {
//          [copy[i], copy[n-i -1]] = [copy[n-i -1],copy[i]]
//     }

//     return copy
// }

// console.log(rec([1, 2, 3, 4]));


function whileRev(arr) {
    var left = 0, 
        right = arr.length -1;

     while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
     }

     return arr
}

console.log(whileRev([1, 2,3,4]))


var array =  [54, 24, 76, 23, 45, 976, 34, 2, -0]
function recursive(arr) {
    if(arr.length == 2) {
        var [min, max] = arr
        return max > min ? min : max;
    } else {
        var min = arr[0]
        for(let i = 1; i < arr.length; i++)  {
            if( min > arr[i]) {
                min = arr[i]
            }
                
        }
        var idx = arr.indexOf(min)
        arr.splice(idx, 1)
        return recursive(arr)
    }
}
console.log(recursive(array))


function secondSmalles(arr) {
    if(arr.length == 2) {
        var [min, max] = arr
        return max > min ? min : max;
    } else {
        var min = arr[0]
        for(let i = 1; i < arr.length; i++)  {
            if( min > arr[i]) {
                min = arr[i]
            }
                
        }
        var idx = arr.indexOf(min)
        arr.splice(idx, 1)
        return recursive(arr)
    }
}
console.log(recursive(array))
// console.log(array.splice(3, 1))
// console.log(array)
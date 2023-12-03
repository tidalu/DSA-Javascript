function isSorted(arr, n) {
    var i = 1; 
    while(i < n) {
        if(arr[i] < arr[i-1]) {
            return 0
        } 
        

        i++
    }

    return 1
}

function isSorted(arr, n) {
    return (arr == arr.sort((a, b) => a-b) )
}

console.log(isSorted([1, 2, 3, 4, 5], 5))
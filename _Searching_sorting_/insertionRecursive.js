function insertion(arr, index ) {
    if( index > arr.length) return arr
    for(i = index; i>0 && arr[i] < arr[i-1]; i--) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]]            
    }
    return insertion(arr, index+1)
}

console.log(insertion([30, 2, 45,-100, 10, 10, 10, 3, -1000, -600000,  -10, 43, -1, 0], 1))

// time complexity : O(N2), (where N = size of the array), for the worst, and average cases.

// space complexity : O(N)
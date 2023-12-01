function buble(arr, size) {
    if(size <= 1 || swap) return arr;
    var swap = false;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1] ) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
            swap = true;
        }
    }

    return buble(arr, --size)
}

// the worst case O(n^2)
// the best case O(n)

console.log(buble([30, 2, 45,-100, 10, 10, 10, 3, -1000, -600000,  -10, 43, -1, 0], 14))

// Time Complexity: O(N2), (where N = size of the array), for the worst, and average cases.

// Reason: If we carefully observe, we can notice that the recursion call, is occurring for n times, and for each recursion call, the loop j runs from 0 to n-2. For, the range of size n, the inner loop runs n-1 times, for the range of size n-1, the inner loop runs n-2 times, and so on. So, the total steps will be approximately the following: (n-1) + (n-2) + (n-3) + ……..+ 3 + 2 + 1. The summation is approximately the sum of the first n natural numbers i.e. (n*(n+1))/2. The precise time complexity will be O(n2/2 + n/2). Previously, we have learned that we can ignore the lower values as well as the constant coefficients. So, the time complexity is O(n2). Here the value of n is N i.e. the size of the array.

//Space Complexity: O(N) auxiliary stack space.
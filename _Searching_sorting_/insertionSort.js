/** 
 * How does the insertion sort work?
 * 
 * Insertion sort works much like sorting a hand of playing cards. We begin with an empty left hand and all remaining cards on the table. We remove one card at a time from the table (unsorted array) and insert it into the correct position in the left hand (sorted array). To find the correct place for the card, we compare it with each card already in hand, from right to left.
 * 
 * The core idea is that if the first few elements of an array are sorted, we can easily insert a new element into its correct position in the sorted part. We compare the new element with each element in the sorted part from right to left.
 * 
 * To implement insertion sort, we run two nested loops: an outer loop from i = 1 to n - 1 to pick element X[i], and an inner loop from j = i - 1 to 0 to find the index to insert X[i] in the partially sorted array X[0…i - 1]. During this process, we move elements greater than X[i] to one position ahead of their current position. It's worth noting that we start from i = 1 because i = 0 is a case of a single element that is already sorted.

In general, insertion sort maintains two subarrays at the ith iteration of the outer loop: a sorted subarray X[0…i - 1] and an unsorted subarray X[i…n - 1]. We incrementally build the partial solution by choosing the first value X[i] from the unsorted part and inserting it into the sorted part X[0…i - 1]. In other words, the size of the sorted subarray at each iteration of the outer loop will increase by 1, and the size of the unsorted subarray will decrease by 1.
 */

// implementation of insertion sort 

function insertionSort(arr) {
    for(var i = 1; i < arr.length ; i++) {
        var currValue = arr[i];
        var j = i - 1

        while( j >=0 && arr[j] > currValue) {
            arr[j+1] = arr[j]
            j--;
        }

            arr[j+1] = currValue
    }

    return arr
}

console.log(insertionSort([5, 2, 6, 1, 9, 0, -12]))

/**
 * 
 * Insertion sort time complexity analysis '
 * 
 * we are running two nested loops 
 * regardless of input outer loop will run n-1 , but inner loop depends on the comparison arr[j] > current value 
 * 
 * 
 *  The worst-case scenario  time complexity
 *  -this si the situation of a reversed sorted array , where the outer loop will run  n-1 times 
 * at each iterations of the outer loop innner loop will run i times, 
 * Because the condition X[j] > currValue will be true for every value from j = i - 1 to 0. In another way: To insert the ith value in its correct position, we shift all values from j = i - 1 to 0 to one right.
 * 
 * So at the ith iteration of the outer loop: Count of comparison operations = i and Count of shifting operations = i
 * 
 * total comparison operations: 1+2+3+....n-2+n-1 = n(n-1)/2 = O(n^2)
 * total shifting operators: 1+2+3+....n-2+n-1 = n(n-1)/2 = O(n^2)
 * so the worst case scenario time complexity f insertion sort : O(n^2) + O(n^2) = O(n^2)
 * 
 * 
 * the best case scenario time complexity of insertion sort 
 * 
 * This is the situation of a sorted array, where the outer loop will run n - 1 time, and the inner loop will run only once. Why? Because every time we enter into the inner loop, the condition X[j] > currValue will be false, and we exit the inner loop. In another way: the ith value is already at the correct position. So we need to perform only one comparison at each iteration of the outer loop.
 * 
  * total comparison operations: n-1 = O(n)
 * total shifting operators: 0 = O(1)
 * 
 * so the best case scenario time complexity of insertion sort = O(n) + O(1) = O(n)
 * 
 * 
 */

// easier understandable way : 
function insertion(arr) {
    for(i = 0; i < arr.length; i++) {
      var j = i ;
      while ( j > 0 && arr[j-1] > arr[j]) {
        var temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
        j--
      }
    }
    return arr
  }
  
  console.log(insertion([1, -2, 3, -4, -34, -56, -100, 99, -1, 1, 23, 56]))
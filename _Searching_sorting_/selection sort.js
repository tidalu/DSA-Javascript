// the idea of selection sort is simple , : we traverse the whole array to find the smallest element. Once we find it , we swap the smalles element with the first elementof the array. Then we again look fir the smallest element in the remaining array(exclude the first element) and swap it with the second element, this process goes until the whole array gets sorted


function selectionSort(array) {
    if(array.length <= 1) return array
    // var min = array[0]   // instead we can just write this with builtin Math object methods 
    var min = Math.min(...array)
    // for(let i = 0; i < array.length; i++) {
    //     if(array[i] < min) {
    //         min = array[i]
    //     }
    // }
  
    // min <-> array[0]
  var temp = min;
  array[array.indexOf(min)] = array[0]
  array[0] = temp
  // call recursion
    return [array[0]].concat(selectionSort(array.slice(1)))
}

console.log(selectionSort([1, 4, 2, 8,-10,  12, 17, 2, 3, 56, 1]))

// second implementation

// explanation 
// We run two nested loops: The outer loop from i = 0 to n - 2 and the inner loop from j = i to n - 1. In other words, at each iteration of the outer loop, we run the inner loop to find the index of the smallest element in the unsorted subarray and swap it with the value at index i.

// So the selection algorithm maintains two subarrays at the ith iteration of the outer loop:
// the sorted subarray X[0...i -1]
// the unsorted subarray X[i...n - 1]

// We build the partially sorted array incrementally by finding the minimum value from the unsorted part and adding it to the sorted part. At each step of the iteration, the sorted subarray size will grow by 1, and the unsorted subarray size will decrease by 1.

function selectionLoop(array) {
    for(let i = 0; i < array.length; i++) {
      var min = i;
        for(let j = i; j < array.length - 1; j++) {
          if(array[j] < array[min] ) {
            min = j
          }
        }
          var temp = array[i]
          array[i] = array[min]
          array[min] = temp
    }
  return array
}

console.log(selectionLoop([1, 4, 2, 8,-10,  12, 17, 2, 3, 56, 1]))
 
// time complexity analysis 

// we run two nested loops where the comparison, swapping, and updating of the minIndex are key operations, regardless of the input , comparison and swapping operations will execute everytime , but updating minIndex depends on the order of input values 

//O(N2), (where N = size of the array), for the best, worst, and average cases.
// Reason: If we carefully observe, we can notice that the outer loop, say i, is running from 0 to n-2 i.e. n-1 times, and for each i, the inner loop j runs from i to n-1. For, i = 0, the inner loop runs n-1 times, for i = 1, the inner loop runs n-2 times, and so on. So, the total steps will be approximately the following: (n-1) + (n-2) + (n-3) + ……..+ 3 + 2 + 1. The summation is approximately the sum of the first n natural numbers i.e. (n*(n+1))/2. The precise time complexity will be O(n2/2 + n/2)


/**
 *  selection sort the best case scenario time complexity 
 * 
 * when this input is sorted descenting order , the comparison X[j] < min becomes true every time time , so the reverse -sorted array is a worst case input for the selection sort
 * 
 * 
 * Selection sort best case scenarion time complexity 
 * 
 * when the input is already sorted , the comparison if statement becomes fase every time, so the swapping inside of it never gets executed, so the sorted array is the best case input for the selection sort 
 * 
 * 
 * so in both worst and best case scenario , selection sort works in O(n^2) tiome comlexity, w use cnostant extra space so the space complexity is O(1)
 * 
 * 
 *  the average time comlexity happens when the input is neither ascending nor descending order sorted, i at that time we willl have mixed one some times inner if contition is true sometimes false so when this happens it is the average case scenario
 *   
 */


/**
 * Buble sort : simple and inefficient algorithm,sometimes also referred as "Sinking sort"
 * 
 *  how does the buble sort work?
 * 
 * If we look at the elements in the sorted array, the largest element is at the (n - 1)th index, the 2nd largest is at the (n - 2)th index, and so on. So one basic idea would be to traverse the array and place the largest element at the (n - 1)th index. Again, traverse the array and place the second-largest element at the (n - 2)th index, and so on.
 * 
 * AFTER THE FIRST ITERATIONS, THE largest element bubles up towards the n-1 the index, similarly after the second iterations, the second larges one bubles up towards n-2 th index,as so on
 * 
 * 
 */

function bubbleSort(array) {
    for(var i = 0; i < array.length-1; i++) { 
      for(var j = 0; j < array.length-1; j++) {
        if(array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]]
        }
      }
    }
    return array
  }
  
  console.log(bubbleSort([1, 4, 2, 8,-10,  12, 17, 2, 3, 56, 1]))


  /**
   * Time complexity analysis 
   * 
   * we run two nested loops, where comparisons and swapping are ke operations, regardless of the input, comparison operations will execute every time, on the another side , swapping depends on the order of teh input , swapiping happens only when comparison if statement is true, so the comparioson wpuld be critical operation that decides time complexity in the worst case
   * 
   * after the ith iteration , inner loops will run n-i-1 so the total count of nested iterations - Sum of (n-i-1) from i = 0 to n-1 = (n - 1) + (n - 2) + . . . + 2 + 1 = n(n - 1)/2 = O(n^2)
   * 
   * 
   * buble sort the worst case scenarion
   * 
   * when the input is sorted in decreasin order , the cmoparison statement becomes true every time of the inner loop , and swapping operation will execute every time , so the reverse sorted array will be the scenario of worst case input in bubbble sort
   * 
   * bubble sort the best case scenario time complexity '
   * 
   * when the input is alreeady in increasing order , the inner loops conditional if statement will be always true , so inner operations will not be executed, 
   * 
   * the optimizationof bubble sort, is to put one break statement when thers not any swapping happening, it means it is already so in the halfway , so we can break the loop in the middle and running time will be more less than normal
   * 
   * 
   */

  // optimized code

  function bubbleOptimized(array) {
    var swapped;

    for(i = 0; i< array.length-1; i++) {

        swapped = false;
        for(let j = 0; j < array.length-1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swapped = true
            }
        }

        if(!swapped) {
            break;
        }
    }

    return array
  }

  /**
   * 
   * in this optimized version, best case scenarion gets changed to O(n), but the worst case scenario is not changed 
   */
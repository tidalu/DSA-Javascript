// quick sort , is a divide -conquer algorithm like merge sort , but unlike merge sort, this algorithm does not use extra any array for sorting, though it uses an auxilary stack spacec, so from the perspective quick sort is slightly better than merge sort, 

// this algorithm is basically a repetition of two simple steps that are following, 

// pick a pivot ans place it in its correct place in the sorting array
// shift smaller elements( smaller that the pivot on the left of the pivot ,and larger one to the right ,)

// now let's discuss the steps in detail considering the array : {4, 6, 2, 5, 7, 9, 1,3}

// step one: the first thing is to choose the pivot, a pivot is basically a chosen element of the given array, the element or the pivot can be choosen by our choice, so in an array a pivot can be any of the following 

// : the first
// : the last
// : the median
// : any random element of the array

// After choosing the pivot(i.e. the element), we should place it in its correct position(i.e. The place it should be after the array gets sorted) in the array. For example, if the given array is {4,6,2,5,7,9,1,3}, the correct position of 4 will be the 4th position.

// here in this ex we have choosen the first element aas our pivot ,

// step two: 

// in this  step we shift smaller elements to the left of the pivot, the larger to the right 
//  after doing this : we have {3, 2, 1, 4, 6, 5, 7, 9}

// From the explanation, we can see that after completing the steps, pivot 4 is in its correct position with the left and right subarray unsorted. Now we will apply these two steps on the left subarray and the right subarray recursively. And we will continue this process until the size of the unsorted part becomes 1(as an array with a single element is always sorted).

var input = [4, 3, 2, 1, 9, 6, 7, 8, 5];

function partition(arr, l, r) {
  var pivot = arr[l];
  var i = l;
  var j = r;

  while (i < j) {
    while (arr[i] <= pivot && i <= r) {
      i++;
    }

    while (arr[j] > pivot && j >= l) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[l], arr[j]] = [arr[j], arr[l]];

  return j;
}

function quick(arr, l, r) {
  if (l < r) {
    var pivotIndex = partition(arr, l, r);
    quick(arr, l, pivotIndex - 1);
    quick(arr, pivotIndex + 1, r);
  }
}


var res = quick(input, 0, input.length - 1);

console.log(input);


// what is the time complexity 
// O(nlogn)
// space comlexity is O(1)
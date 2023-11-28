function merge(arr1, arr2) {
    var i = 0;
    var j = 0;
    var arr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        arr = arr.concat(arr1.slice(i));
    } else if (j < arr2.length) {
        arr = arr.concat(arr2.slice(j));
    }

    return arr;
}


function mergeSort(array) {
    if (array.length <= 1) return array;
    var ar1 = array.slice(0, Math.floor(array.length / 2))
    var ar2 = array.slice(Math.floor(array.length / 2))
    if (array.length > 2) {
        mergeSort(ar1)
        mergeSort(ar2)
    }

    return merge(ar1, ar2)
}
console.log(mergeSort([4, 6, 8, 23, 3, 6, 7, 12, 34]));


//   optimized below

function merge1(arr1, arr2) {
    var arr = [];
    while (arr1.length && arr2.length) {
        var midElem;
        if (arr1[0] <= arr2[0]) midElem = arr1.shift();
        else midElem = arr2.shift();
        arr.push(midElem)
    }
    if (arr1.length) arr = arr.concat(arr1)
    else arr = arr.concat(arr2)
    return arr;
}


function mergeSort1(array) {
    if (array.length <= 1) return;
    var ar1 = array.slice(0, Math.floor(array.length / 2))
    var ar2 = array.slice(Math.floor(array.length / 2))
    return merge1(mergeSort1(ar1), mergeSort1(ar2))
}
console.log(mergeSort([4, 6, 8, 23, 3, 6, 7, 12, 34]));


// time complexity analysis 

//  O(nlogn)

// explanation: at each step , we devide whole array, for that logn and we assume n steps are taken to get sorted array, so overall time complexity will be nlogn

// Space complexity 

// O(n)

// we are using temporary array to store elements in sorted order

// Auxiliary space complexity O(n)

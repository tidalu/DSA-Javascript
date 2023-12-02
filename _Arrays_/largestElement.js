var arr = [54, 24, 76, 23, 45, 976, 34, 2, -0]

function max(arr) {
    let maxim = arr[0]
    let i =0
    while(i < arr.length) {
        
        if(arr[i] > maxim) {
            var temp = arr[i]
            arr[i] = maxim;
            maxim = temp;
        }

        i++
        
    }

    return maxim
}

 
function min(arr) {
    let minimum = arr[0]
    let i =0
    while(i < arr.length) {
        
        if(arr[i] < minimum) {
            var temp = arr[i]
            arr[i] = minimum;
            minimum = temp;
        }

        i++
        
    }

    return minimum
}
function recursive(arr) {
    if(arr.length == 1) return arr[0]
    var last = arr.length -1
    if(arr[0] > arr[last]) {
        return recursive(arr.slice(0, -1))
    } else {
        return recursive(arr.slice(1))
    }
}
console.log(recursive(arr))

function recursiveMin(arr) {
    if(arr.length == 1) return arr[0]
    var last = arr.length -1
    if(arr[0] < arr[last]) {
        return recursiveMin(arr.slice(0, -1))
    } else {
        return recursiveMin(arr.slice(1))
    }
}

console.log(recursiveMin(arr))

console.log(min(arr))
function leftByOne(arr) {
    var first = arr.splice(0, 1)
    arr.push(first[0])
    return arr
}
function leftByOne(arr) {
    var length = arr.length 
    if(length <= 1) return arr
    
    var first = arr[0]
    for(let i=0; i < length -1; i++) {
        arr[i] = arr[i+1]
    }

    arr[length-1] = first;
}
console.log(leftByOne([2, 3, 4, 5, 6, 7]))
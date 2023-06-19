const kthMaxMin = function(arr, th){
    for(let i = 0 ; i < th; i++){
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        let idxMax = arr.findIndexOf(max);
        arr.splice(idxMax, 1);
        let idxMin = arr.findIndexOf(min);
        arr.splice(idxMin, 1);
    }
    return arr; // this is bullshit , we will try again
}

console.log(kthMaxMin([7, 10, 4, 3, 20, 15,]));
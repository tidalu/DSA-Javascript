var reverse = (arr) => {
    for(var i = 0; i < arr.length / 2; i++){
        var last = arr.length - i - 1;
        
        
        var temp = arr[i]
        arr[i] = arr[last];
        arr[last] = temp;
    
    
    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]))
var div = (n) => {
    var arr = []
    if(n > 0){
        for(var i = 1; i <= n/2; i++){
            if(n % i == 0){
                arr.push(i)
            }
        }
    }else{
        for(var i = -1; i >= n/2; i--){
            if(n % i == 0){
                arr.push(i)
            }
        }
    }
    return [...arr, n]
}

console.log(div(12))
console.log(div(-12))
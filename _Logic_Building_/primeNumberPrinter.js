function primeOut(number) {
    var arr =[]
    var newArr = [];
    for(var i = 2 ; i <= number; i++){
        var count = 0;
        var isPrime = true;
        for(var j = 2; j <= Math.sqrt(i); j++) {
            if(i % j == 0){
                isPrime = false;
                count++; // 3 4 5
                break;
            }
        }   
        if(count == 0 ){
            newArr.push(i);
        }

        if(isPrime){
            arr.push(i)
        }
    }
    return newArr;
}

console.log(primeOut(100));
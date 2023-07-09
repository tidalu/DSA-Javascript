var countDigits = (num) => {
    var c = 0;
    while(num / 10 > 0){
        num = Math.floor(num / 10);
        c++
    }
    return c;
}

console.log(countDigits(334))
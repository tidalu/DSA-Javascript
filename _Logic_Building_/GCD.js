function name(a, b) {
    while(a > b){
        [a, b] = [b, a]
    }
    
    while(b % a != 0){
        [a, b] = [ b%a, a]
    }
    return a;
}


console.log(name(12, 15))
console.log(name(4, 8))
console.log(name(12, 17))



var bruteForce = (a, b) => {
    var min = Math.min(a, b);
    for(var i = min; i > 0; i-- ){
        if(a % i == 0 && b % i == 0){
            var returnValue = i;
            break;
        }
    }
    return returnValue;
}

console.log("brute", bruteForce(11, 33))

// e

// 20   ->   15  
// 5   ->   15
// 10   ->   5
// 5   ->  5

// euclid second

var euclid = (a, b) => {
    while(a > b){
        [a, b] = [b, a]
    }
    while(b % a != 0){
        [a, b] = [b-a, a]
    }

    return a;
}
// it might be correct but very long vay, many steps, instead good to use the first way which is the more efficient 


// another way

var gggc = (a, b) => {
    while (a >0 && b> 0){
        if(a>b) a = a% b
        else b = b% a;
    }
    if(a == 0) return b;
    return a;
}

console.log(gggc(52, 10))  // O(log(α) min(a, b))
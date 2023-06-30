
//     function isPalindrome(stringI) {
//         return String(stringI) == String(stringI.split('').reverse().join('')) ? true : false;
//         // console.log(String(stringI))
//     }



// console.log(isPalindrome("aabaa"));
// // console.log(isPalindrome(-121));
// // console.log(isPalindrome(21));



// new version

function isPalindrome(x){
    var arr = String(x).split('').map(Number);
    var truth = 0;

    for(var i = 0; i < arr.length; i++){
        var first = arr[i], 
        last = arr[arr.length - 1 - i]

        if(first != last){
            truth++
        }
    }

    if(truth > 0){
        return false
    }
    return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(1000021))
console.log(isPalindrome(-121))
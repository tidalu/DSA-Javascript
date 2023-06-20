
    function isPalindrome(stringI) {
        return String(stringI) == String(stringI.split('').reverse().join('')) ? true : false;
        // console.log(String(stringI))
    }



console.log(isPalindrome("aabaa"));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(21));

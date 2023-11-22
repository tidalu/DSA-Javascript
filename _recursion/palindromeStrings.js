function palindrome(strings) {
    var first = 0;
    var last = strings.length-1
    var count = 0
    while ( first  <  last) {
      if(strings.charAt(first) != strings.charAt(last)) {
        return "Not a Palindrome"
      }
        first++;
        last--;
    }
    return "Palindrome"
  }
  
  console.log(palindrome("TAKE U FORWARD"))
  
  
  

  // with recursive way: 

  function palindrome(strings) {

    if (strings.length <= 1) return true
    else {
        if (strings[0] != strings[strings.length - 1]) {
            return false
        } else {
          return palindrome(strings.slice(1, strings.length - 1))
        }
    }

}

console.log(palindrome("madam"))


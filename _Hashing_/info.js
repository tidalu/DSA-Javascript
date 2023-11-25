

// for character hashing we could use the number code of characcters inm ASCCI list, 
// that  will help alot
// what we will do is we we just create 16 sized array, 
// adn we loop through given array
// every time when we find the proper index, we just subtract given alphabet from 'a' for small letters, 
// what it does  is, it converts the char into ascci code, it will be 97, so like that if we subtract a - a it will give us 0
// htat means a will be index of 0, so like that we can count all chars, as a restul to print out the counted chars amount, we call the arr like that , the arr what we created to prestore the values, 

// what if we have all capital letters are also mixed, 
// we do not create 26 or 52 sized arr, we will use all the 256 values, 
// that means even if we have larger sized array taking more memory, it is easier that previous , cuz we just srote the char into it's proper coded index, 'a' or 'b' without subtracting, to console also we do the same ,that is pretty much of it , thanks 




// how to calculte the time commplexity of the map

// there is division mehtod which is used most for hasing, 
/**
 * it is what like, we will only have digit sized array what i mean is only from 0-9 
 * to ocunt elements appearing, we will divide that eleemnt by 10, we ge tthe modulo
 * we store it ot the proper index
 * what if we have more the same indexed values like [1, 2,,23, 34 ,33, 43, 33, 53, 163]
 * like that
 * in this time we will have linear chaining which is deeply learned in linked list chapter ,
 * what did it do is ,
 * 1: 1, 
 * 2: 2, 
 * 3: 23 -> 33 -> 33-> 43 -> 53 -> 163
 * 4: 43
 * 
 * like that after we get to this, we can count in very short time, this takes O(1) it is the best case, but in very rare time the time cmoplexity of the hashing is in the worst
 * cases it is O(n), in what condition is , when we have only on digit ending numbers, like,, 3, 43, 53, 143, 1663, only such numbers and they are like 10^5 or more , in this contdition 
 * "collision" happens, and it's time compexity is O(n), but is is very rare to happen, but mostly it is O(1)
 */
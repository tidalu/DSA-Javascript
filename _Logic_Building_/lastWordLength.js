/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(' ').filter(x => x != '').at(-1).length
    
};

console.log(lengthOfLastWord("nsjkb iife ifie  "))
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
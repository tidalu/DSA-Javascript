/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    var obj = new Map();
    for(let i = 0; i < s.length; i++) {
        if(obj.has(s[i])) {
            return s[i];
        } else {
           obj.set(s[i], 1);
        }
    }
    return null;
};


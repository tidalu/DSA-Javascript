/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately_ = function (word1, word2) {
    var res = "";
    if (word1.length >= word2.length) {
        for (var i = 0; i < word1.length; i++) {
            res += word1[i]
            if (word2[i])
                res += word2[i]
        }
        return res;
    } else {
        for (var i = 0; i < word2.length; i++) {
            if (word1[i])
                res += word1[i]
            res += word2[i]
        }
        return res;
    }
};

// version two 

var mergeAlternately = function(word1, word2) {
    var res = "";
    var minLength = Math.min(word1.length, word2.length);
    
    for (var i = 0; i < minLength; i++) {
        res += word1[i] + word2[i];
    }
    
    // Append remaining characters from the longer word
    if (word1.length > word2.length) {
        res += word1.substring(minLength);
    } else if (word2.length > word1.length) {
        res += word2.substring(minLength);
    }
    
    return res;
};


var word1 = "abc", word2 = "pqrtre"


console.log(mergeAlternately(word1, word2))
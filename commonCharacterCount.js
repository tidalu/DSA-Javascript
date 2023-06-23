function solution(s1, s2) { // because of filter time complexity is O(N^2)
    var set = {};
    var set2 = {};
    for (var i = 0; i < s1.length; i++) {
        set[s1[i]] = Array.from(s2).filter(x => x == s1[i]).length
    }
    for (var i = 0; i < s1.length; i++) {
        set2[s1[i]] = Array.from(s1).filter(x => x == s1[i]).length
    }
    let sum = 0;
    Object.keys(set).forEach(key => {
        if(set[key] >= set2[key]){
            sum += set2[key];
        }else {
            sum += set[key]
        }
    });
    return sum;
}
function solution_optimized(s1, s2) {
    var set = {};

    for (var i = 0; i < s1.length; i++) {
        if (set.hasOwnProperty(s1[i])) {
            set[s1[i]].s1++;
        } else {
            set[s1[i]] = { s1: 1, s2: 0 };
        }
    }

    for (var i = 0; i < s2.length; i++) {
        if (set.hasOwnProperty(s2[i])) {
            set[s2[i]].s2++;
        } else {
            set[s2[i]] = { s1: 0, s2: 1 };
        }
    }

    let sum = 0;
    Object.keys(set).forEach(key => {
        sum += Math.min(set[key].s1, set[key].s2);
    });

    return sum;
}





console.log(solution("aabcc", "adcaa"))
console.log(solution_optimized("aabcc", "adcaa"))
function solution(inputString) {
    if (inputString != '') {
        var newArr = Array.from(inputString)
        var res = newArr.splice((newArr.indexOf('(') + 1), (newArr.indexOf(')') - 1)).reverse().join('')
        return 

    } else {
        return '';
    }

} // need to think about this a bit 


console.log(solution("(abc)d(efg)"))
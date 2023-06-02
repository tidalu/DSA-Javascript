



function get_missing_letters(str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split('').reduce((newArr, char) => {
        if(!str.split('').includes(char)){
            newArr.push(char);
        }
        return newArr;
    }, []).join('');
}



function get_missing_letters1(str){
    let  leftLetters = new Map();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet.split('').forEach((char) => leftLetters.set(char, true));
    str.split('').forEach((char) => {
        if(leftLetters.has(char)){
            leftLetters.delete(char)
        };
    });
    return Array.from(leftLetters.keys()).join('');
}

// console.log(get_missing_letters1("zyxwvutsrq"))

const arr = [0, 2,3, 6, 4, 8, 3]

function sum_missing_numbers(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    var setNumbers = new Set(arr);
    return Array.from({length: max - min + 1}, (_, i) => min + i).reduce((sum, num) => {
        if(!setNumbers.has(num)){
            sum += num;
        }
        return sum;
    }, 0);
};
function sum_missing_numbers1(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const newArraySum = Array.from({length: max - min + 1}, (_, i) => min + i).reduce((sum, num) => sum + num, 0);
    const givenArraySum = arr.reduce((sum, num) => sum + num, 0);
    return  (newArraySum - givenArraySum);
    
};
console.log(sum_missing_numbers1([4, 3, 8, 1, 2]));


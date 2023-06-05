

// get missing letters 

function get_missing_letters(str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split('').reduce((newArr, char) => {
        if(!str.split('').includes(char)){
            newArr.push(char);
        }
        return newArr;
    }, []).join('');
}


// version 2

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

// console.log(get_missing_letters1("zyxwvutsrq"));

const arr = [0, 2,3, 6, 4, 8, 3]
// sum of missing number in given array
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
// version 2
function sum_missing_numbers1(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const newArraySum = Array.from({length: max - min + 1}, (_, i) => min + i).reduce((sum, num) => sum + num, 0);
    const givenArraySum = arr.reduce((sum, num) => sum + num, 0);
    return  (newArraySum - givenArraySum);
    
};
console.log(sum_missing_numbers1([4, 3, 8, 1, 2]));

// sum except itself
function sumExceptItself(arr){
    
    const resultArray = new Array();
    const sum = arr.reduce((sum, num) => num + sum);
    arr.forEach((el) => {
        let item = sum - el;
        resultArray.push(item);s
    });
    return resultArray;
}

console.log(sumExceptItself([10, 20, 30, 40, 50, 60]));

console.clear();

// sum of two smallest positive nubers of the array
const twoSmallestPositiveSum = (arr) => {
    const newArray = arr.filter((num) => num > 0);
    newArray.sort((a, b) => a - b);
    return (newArray[0] + newArray[1]);
}

// version 2
const sumTwoSmallestNums = (arr) => {  
    var min1 = Infinity;
    var min2 = Infinity;
    arr.forEach((el) => {
        if(el < min1 && el > 0){
            min2 = min1;
            min1 = el;
        }else{
            if(el < min2 && el>0){
                min2 = el;
            }
        }
    });
    console.log(min2 + min1);
}



sumTwoSmallestNums([19, 5, 42, 2, 77]) //➞ 7

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])// ➞ 3453455

sumTwoSmallestNums([2, 9, 6, -1]) // 8

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])// ➞ 563

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])//➞ 4519




// functioNAL JS REVIEW


function getWorkshopDate() {
    return new Date(2020, 11, 4).toDateString();
}

console.log(getWorkshopDate());
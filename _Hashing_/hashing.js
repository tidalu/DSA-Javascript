// basic hashing 

// with brute force approach

var arr = Array.from({length: 20}, ((_, i) => i+1)).map(i => i * 2);
function check(n, arr) {
  var count = 0; 
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] == n) {
      count++
    }
  }
  return count
}

function countAll(query) {
  var obj = {}
  for(let i = 0; i < query.length ; i++) {
    var cameResult = check(query[i], arr)
    obj[query[i]] = cameResult
  }
  
  return obj
}

console.log(countAll([1, 4, 5, 7, 20]))

// brute force approach number 2 
var arr = [1, 2, 6, 8 ,0, 5, 12]

function counter (n, arr) {
    var count = 0;
    for(let i = 0; i < arr.length; i++){
        if(n === arr[i]) count++
    }

    return  count;
}

function returAll(arr, targets) {
    var res = {}
    for(let i = 0; i < targets.length; i++) {
        res[targets[i]] = counter(targets[i], arr)
    }

    return res;
}

var trg = [1, 2, 3, 4, 5, 12]

var result = returAll(arr, trg);

console.log(result);
// complexity analysis, when the parent function executed, it has a loop that runs the Q length of the query  and every time it is inside calling another function that has also another loop runs the N lenght of the given array so the time complexity of theis problem is O(Q*N), now the length of the query becomes like 10^5 and the array size also becomes large like 10^5 , then the time complexity will be O(10^10), we canot say a code is goog if it takes 100 seconds to get executed




// optimized hashing approach 
var size = 13 ;

var arr = Array.from({length: 13}, (_, i) => i+1)

var query = [2, 4, 6, 3, 8, 1, 7, 3, 7, 12, 14, 13, 16, 17, 12]
var hash = {}

for(let i = 0; i < query.length; i++) {
  if(query[i] <= size) {
    if(!hash[query[i]]) {
    hash[query[i]] = 1
  } else {
    hash[query[i]]++;
  }
  } else {
    hash[query[i]] = 0
  }
  
}

console.log(hash)




// // hashing is prestoring and fetching 

var inArr = [1, 2, 3, 5, 3, 1,1, 2, 3, 4, 6, 12]
var countable = [1, 3, 5, 2, 7]

var newHash = Array.from({length: Math.max(...inArr) + 1}).fill(0)


for(let i = 0; i < countable.length; i++) {
    newHash[countable[i]]++;
}

console.log(newHash)

// for 1
console.count("1", newHash[1])
console.count("3", newHash[3])
console.count("5", newHash[5])
console.count("2", newHash[2])
console.count("7", newHash[7])

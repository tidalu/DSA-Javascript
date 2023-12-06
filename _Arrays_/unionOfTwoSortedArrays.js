// approach 1, concat, then make set thenmake array again, then sort once it will return the desired result 
// approach 2, loop i on first j on ssecond array , take smaller , if there is exist or equal ignore that 
// approach 3 is using map, in map the keys are stored in sorted order ascending, as we require element to be in ascending order , map is very preferable 


var unionOfSorted = function (n, m) {
  return Array.from(new Set(n.concat(m))).sort((a, b) => a - b)
};

function unionOfSorted(n, m) {
    var i = 0;
    var j = 0;
    var arr= []
    while(n[i] && m[j]) {
        if(n[i] > m[j]) {
          arr.push(m[j])
          j++
        } else if(n[i] < m[j]){
          arr.push(n[i])
          i++
        } else {
          arr.push(n[i])
          i++
          j++
        }
      }
    
    if(i < n.length) {
       arr.push(...n.slice(i))
    } else if(j < m.length) {
      arr.push(...m.slice(j))
    }
    
    
    return arr
  }
  
  
  function unionOfSorted (n, m) {
    let freq = new Map()
    var union = []
    
    for(let num of n) {
      freq.set(num, (freq.get(num) || 0) + 1)
    }
    
    for(let num of m) {
      freq.set(num, (freq.get(num) || 0) + 1)
    }
    
    for(let [num, count] of freq) {
      console.log([num, count])
      union.push(num)
    }
    
    return union.sort((a, b) =>  a - b)
  }
  
  
  
  console.log(unionOfSorted([1, 2, 3, 4, 6], [2, 3, 5]));
  
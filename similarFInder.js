// function solution(a, b) {
//   if (a.length !== b.length) return false;
//   else {
//     var sumA = a.reduce((sum, a) => sum + a, 0);
//     var sumB = b.reduce((sum, a) => sum + a, 0);
//     var set = new Set(b);

//     for (var i = a.length - 1; i >= 0; i--) {
//       if (set.has(a[i]) && sumA === sumB) {
//         set.delete(a[i]);
//         a.splice(i, 1);
//       }
//     }

//     console.log(set);
//     console.log(a);

//     return (set.size == 0 && a.length == 0) ? true: false
//   }
// }


// function solution(a, b) {
//   if (a.length !== b.length) return false;

//   const countA = {};
//   const countB = {};

//   for (const num of a) {
//     countA[num] = (countA[num] || 0) + 1;
//   }

//   for (const num of b) {
//     countB[num] = (countB[num] || 0) + 1;
//   }

//   for (const key in countA) {
//     if (!(key in countB) || countA[key] !== countB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

function solution(a, b) {
    if (a.length !== b.length) return false;

    const sortedA = a.slice().sort();
    const sortedB = b.slice().sort();

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            return false;
        }
    }

    return true;
}

// not fully finshed yet
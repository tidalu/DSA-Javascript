

// function solution(a, b) {
//     if (a.length !== b.length) return false;

//     const sortedA = a.slice().sort();
//     const sortedB = b.slice().sort();

//     for (let i = 0; i < sortedA.length; i++) {
//         if (sortedA[i] !== sortedB[i]) {
//             return false;
//         }
//     }

//     return true;
// }

function solution(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

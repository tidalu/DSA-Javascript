function sum(n) {
    if(n == 0) return 0;
    return n + sum(n-1);
     
}

console.log(sum(5))

function sumFromNToZero(i, n) {
    if (i <= 0) {
        return 0;
    }
    return i + sumFromNToZero(i - 1, n);
}

console.log(sumFromNToZero(3, 0));


function math(n) {
    return (n*(n+1))/2
}

console.log(math(3))
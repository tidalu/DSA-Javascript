var armstrong = n => {
    const save = n;
    var count = 0;
    var arr = []
    while(n != 0){
        arr.push(n%10);
        n = Math.floor(n / 10);
        count++;
    }
    return  arr.map(x => Math.pow(x, count)).reduce((sum, val) => sum + val, 0)  == save;
}

console.log(armstrong(1634))
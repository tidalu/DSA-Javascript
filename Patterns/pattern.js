
// pattern one: 
/*

* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * * 

*/
for(var  i = 0; i < 5; ++i){
    var row = '';
    for(var j = 0; j < 5; ++j){
        row += '*';
    }
    console.log(row);
}

console.log('\n');

for(var i = 0; i < 5; i++){
    var row = '';
    for(var j = i; j >= 0; j--){
        row += '*';
    }
    console.log(row);
}
console.log('\n');

for(var i = 0; i < 5; i++){
    var row = '';
    for(var j = 0; j <= i; j++){
        row += j+1;
    }
    console.log(row);
}

console.log('\n');
for(var i = 0; i < 5; i++){
    var row = '';
    for(var j = 0; j <= i; j++){
        row += i+1;
    }
    console.log(row);
}
console.log('\n');
for(var i = 5; i > 0; i--){
    var row = '';
    for(var j = 0; j < i; j++){
        row += '*';
    }
    console.log(row);
}
console.log('\n');
for(var i = 5; i > 0; i--){
    var row = '';
    for(var j = 0; j < i; j++){
        row += j+1;
    }
    console.log(row);
}
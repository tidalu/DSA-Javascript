
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

for(var i = 0; i < 5; i++){
    for(let j = 4; j > i; j--){
        process.stdout.write(" ");
    }
    for(let k= 0; k <= i*2; k++){
        process.stdout.write("*");
    }

    console.log('\n');
}


process.stdout.write("this si another way of writing");
process.stdout.write("  nega shunaqa"); 
console.log('t')// the difference is the lne break


for(var i = 0; i < 5; i++){
    
    for(var j = 0; j < i; j++){
        process.stdout.write(" ")
    }
    for(var k = 0; k < 9-(i*2); k++){
        process.stdout.write("*");
    }
    console.log('\n');
}


for( var i = 0; i < 10; i++){
    if(i > 5){
        for(var j = 0; j < i; j++){
            process.stdout.write(" ")
        }
        for(var k = 0; k <= 9-(i*2); k++){
            process.stdout.write("*");
        }
        for(var j = 0; j < i; j++){
            process.stdout.write(" ")
        }
    } else {
        for(let l = 4; l > i; l--){
            process.stdout.write(" ");
        }
        for(let m= 0; m <= i*2; m++){
            process.stdout.write("*");
        }
        for(let l = 4; l > i; l--){
            process.stdout.write(" ");
        }
    }

    console.log('\n');
}
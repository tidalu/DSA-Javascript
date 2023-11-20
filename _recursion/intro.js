// when a function calls itself  untill a specific conditoin is met
// tehre are base and recurse part
var count = 0;
function f() {
    if(count == 4) return ;
    else {
        console.log(count);
        count++;
        f()
    }
}

// f()


// Recursion tree 

function printN(n) {
    if(n == 0) return ;
    else {
        console.log("Alif") 
        printN(n-1)

    }
}


// time complexity of theis prob is, O(n), cuz if else part here is almost nothing to do, so it's time complexity is O(1), but there are multip n times function calls, to they take time, so it will be O(n)

// space complexity of the prob is , it is , every time when the function calls another one it is being kept in the stack, n times, till the base case is found, base case is in the end, that means till that n not finished functions are kept in the stack space, so this si also O(n)

printN(4)

function print(i, n, status) {
    if(status == -1) { // this mean form N to i
        if(n < i ) return ;
        else {
            console.log(n);
            print(i, n-1, status)
        }
    } else { // this mean from i to n
        if( i > n ) return ;
        else {
            console.log(i);
            print(i+1, n, status)
        }
    }
}

print(1, 10, -1)
// backtracking

function printBacktracking(i, n) {
    if( i <= 0) return ;
    else {
        printBacktracking(i-1, n);
        console.log(i)
    }
}

var num = 4
printBacktracking(num, num)
console.clear()

function ntoone(i, n) {
    if(n < i) return;
    else {
        ntoone(i+1, n)
        console.log(i);
    }
}

ntoone(1, num)
function *fibbonacciGenerator(n) {
    var first = 0; 
    var second = 1;
    for(let i = 0; i < n ; i++ ) {
      yield first;
      var tmp = first 
      first = second;
      second  = tmp + second 
    }
  }

  var arrfib = [...fibbonacciGenerator(10)]
  console.log(arrfib)

  function withNormalLoop(n) {
    var first = 0, 
    second = 1, 
    retu = [];

    for(let i = 0; i < n ; i++) {
        retu.push(first);
        [first, second] = [second, first+second]
    }

    return retu
  }

  console.log(withNormalLoop(10))

// in recursive way

function fibonacci(N) {
    if (N <= 1) {
      return N;
    }
    let last = fibonacci(N - 1);
    let slast = fibonacci(N - 2);
  
    return last + slast;
  }
  
  let result = fibonacci(5);
  console.log(result); 
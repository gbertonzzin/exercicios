console.log("teste");
var fib = 1;


function fibonacci(n){
    if (n == 0) {return fib}
    else {
        for (i = 0; n < 8000; i++){
        fib = fib + n;
        n = fib;
        console.log(fib)
        }
    }
}

fibonacci(1);
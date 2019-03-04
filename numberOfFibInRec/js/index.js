const n = parseFloat(prompt('Enter the nomber'));

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
document.write(fib(n));

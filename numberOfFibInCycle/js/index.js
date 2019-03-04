const n = parseFloat(prompt('Enter the nomber'));

function fib(n) {
    let a = 1
    let b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
document.write(fib(n));

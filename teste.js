function sum(one, two) {
    var result = one + two;
    if (two == 0)
        result = one + one;
    return result;
}
var result = sum(2);
console.log(result);

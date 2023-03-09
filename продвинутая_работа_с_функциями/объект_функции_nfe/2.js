'use strict';


function sum(a) {
    let sum = a;
    function f(b) {
        sum += b;
        return f;
    }

    f.toString = function () {
        return sum;
    };

    return f;
}

alert(sum(1)(2)); // 1 + 2
alert(sum(1)(2)(3)); // 1 + 2 + 3
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));

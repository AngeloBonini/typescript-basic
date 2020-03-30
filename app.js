"use strict";
function multiply(_a) {
    var _b = _a === void 0 ? {} : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 25 : _c;
    if (!b) {
        b = 25;
    }
    return a * b;
}
console.log(multiply({ a: 5 }));
console.log(multiply({ a: 5, b: 35 }));

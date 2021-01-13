var Stack = /** @class */ (function () {
    function Stack() {
        this._store = [];
    }
    Stack.prototype.push = function (val) {
        this._store.push(val);
    };
    Stack.prototype.pop = function () {
        return this._store.pop();
    };
    return Stack;
}());

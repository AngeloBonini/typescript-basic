var Queue = /** @class */ (function () {
    function Queue() {
        this._store = [];
    }
    Queue.prototype.push = function (val) {
        this._store.push(val);
    };
    Queue.prototype.pop = function () {
        return this._store.shift();
    };
    return Queue;
}());

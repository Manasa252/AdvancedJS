var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    Queue.prototype.peek = function () {
        return this.queue[0];
    };
    return Queue;
}());
var numqueue = new Queue();
numqueue.enqueue(100);
numqueue.enqueue(200);
numqueue.enqueue(100);
numqueue.enqueue(200);
console.log(numqueue.queue);
numqueue.dequeue();
console.log(numqueue.queue);
console.log(numqueue.peek());

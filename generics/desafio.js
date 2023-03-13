"use strict";
class Queue {
    constructor(...args) {
        this.join = (newElement) => {
            this.queue.push(newElement);
        };
        this.next = () => this.queue.length > 0 ? this.queue.shift() : "Fila vazia";
        this.print = () => console.log(this.queue);
        this.queue = args;
    }
}
const myQueue = new Queue();
myQueue.print();
myQueue.join("Rafa");
myQueue.print();
console.log(myQueue.next());
console.log(myQueue.next());

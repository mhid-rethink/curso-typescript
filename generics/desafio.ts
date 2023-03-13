class Queue<T> {
  private queue: Array<T>;

  constructor(...args: T[]) {
    this.queue = args;
  }

  join = (newElement: T) => {
    this.queue.push(newElement);
  };

  next = (): T | undefined | string =>
    this.queue.length > 0 ? this.queue.shift() : "Fila vazia";

  print = (): void => console.log(this.queue);
}

const myQueue = new Queue<String>();

myQueue.print();
myQueue.join("Rafa");
myQueue.print();
console.log(myQueue.next());
console.log(myQueue.next());

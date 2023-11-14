export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T> | undefined = undefined;
    private tail?: Node<T> | undefined = undefined;

    constructor() {}

    enqueue(item: T): void {
        const newNode = new Node<T>(item);
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        if (!this.head) {
            this.tail = undefined;
            return;
        }
        this.length--;
        const h = this.head;
        this.head = h.next;
        h.next = undefined;
        return h.data;
    }
    peek(): T | undefined {
        return this.head?.data;
    }
}

class Node<T> {
    public next?: Node<T>;
    constructor(public data: T) {
        this.data = data;
    }
}

const list = new Queue<number>();

list.enqueue(5);
list.enqueue(7);
list.enqueue(9);

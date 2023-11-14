export default class Queue<T> {
    public length: number = 0;
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    constructor() {}

    enqueue(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    deque(): T | undefined {
        if (!this.head) {
            this.tail = null;
            return;
        }
        const h = this.head;
        this.head = this.head.next;
        h.next = null;
        this.length--;
        return h.data;
    }
    peek(): T | undefined {
        if (!this.head) {
            return;
        }
        return this.head.data;
    }
}

class Node<T> {
    public next: Node<T> | null = null;
    constructor(public data: T) {
        this.data = data;
    }
}

const list = new Queue<number>();

list.enqueue(5);
list.enqueue(7);
list.enqueue(9);

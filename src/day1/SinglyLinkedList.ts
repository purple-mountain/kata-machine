export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length - 1) {
            this.append(item);
            return;
        }
        const newNode = new Node<T>(item);
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        newNode.next = current!.next;
        current!.next = newNode;
        this.length++;
    }
    append(item: T): void {
        const newNode = new Node<T>(item);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }
        let current = this.head;
        if (current.data === item && this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current.data;
        }
        if (current.data === item) {
            this.head = current.next;
            this.length--;
            current.next = null;
            return current.data;
        }
        while (current.next) {
            if (current.next.data === item) {
                const rmvNode = current.next;
                current.next = rmvNode.next;
                this.length--;
                return rmvNode.data;
            }
            current = current.next;
        }
        return;
    }
    get(idx: number): T | undefined {
        if (!this.head) {
            return;
        }
        let current: Node<T> | null = this.head;
        if (idx === 0) {
            return current.data;
        }
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        return current?.data;
    }
    removeAt(idx: number): T | undefined {
        if (this.length < idx) {
            return;
        }
        let current = this.head;
        if (idx === 0 && this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current?.data;
        }
        if (idx === 0) {
            const rmvNode = current;
            this.head = current!.next;
            rmvNode!.next = null;
            this.length--;
            return rmvNode?.data;
        }
        for (let i = 1; i < idx; i++) {
            current = current!.next;
        }
        const rmvNode = current!.next;
        if (idx === this.length - 1) {
            this.tail = current;
            current!.next = null;
            return rmvNode!.data;
        }
        current!.next = rmvNode!.next;
        rmvNode!.next = null;
        this.length--;
        return rmvNode!.data;
    }
    print(): void {
        for (let i = 0; i < this.length; i++) {
            console.log(this.get(i));
        }
    }
}

class Node<T> {
    public next: Node<T> | null = null;
    constructor(public data: T) {
        this.data = data;
    }
}

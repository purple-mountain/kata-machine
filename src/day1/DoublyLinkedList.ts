export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (this.length === 0) {
            return;
        }
        if (this.length === 1 && this.head?.value === item) {
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return;
        }
        let currNode = this.head;
        if (this.head?.value === item) {
            this.length--;
            this.head = this.head.next;
            currNode!.next = undefined;
            return currNode?.value;
        }
        if (this.tail?.value === item) {
            this.length--;
            currNode = this.tail;
            this.tail = this.tail.prev;
            currNode!.prev = undefined;
            return currNode?.value;
        }
        for (let i = 0; i < this.length; i++) {
            if (currNode?.value === item) {
                this.length--;
                let nodeBefore = currNode.prev;
                let nodeAfter = currNode.next;

                nodeBefore!.next = nodeAfter;
                nodeAfter!.prev = nodeBefore;

                currNode.prev = undefined;
                currNode.next = undefined;
                return currNode.value;
            }
            currNode = this.head?.next;
        }

        return;
    }
    get(idx: number): T | undefined {
        if (idx > this.length - 1 || this.length == 0) {
            return;
        }
        let node = this.head;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }
        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length - 1 || this.length === 0) {
            return;
        }

        let node = this.head;
        if (idx === 0) {
            this.length--;
            this.head = this.head!.next;
            node!.next = undefined;
            return node?.value;
        }
        if (idx === this.length - 1) {
            this.length--;
            node = this.tail;
            this.tail = this.tail!.prev;
            node!.prev = undefined;
            return node?.value;
        }

        this.length--;
        for (let i = 0; i < idx; i++) {
            node = node!.next;
        }

        node!.prev!.next = node?.next;
        node!.next!.prev = node?.prev;

        node!.prev = undefined;
        node!.next = undefined;

        return node!.value;
    }
}

type Node<T> = {
    prev?: Node<T>;
    next?: Node<T>;
    value: T;
};

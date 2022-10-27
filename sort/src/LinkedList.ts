import { Sortable } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList implements Sortable{
    head: Node | null = null;

    constructor(public data: number[]) {

    }

    get length():number { 
        if(!this.head) return 0;

        let length = 1;
        let node = this.head;
        while(node.next) {
            length++;
            node = node.next;
        }

        return length; 
    }

    at(i: number): Node {
        if(!this.head) {
            throw new Error("Index out of bounds");
        }

        let counter = 0;
        let node: Node | null = this.head;
        while(node) {
            if(counter == i) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error("Index out of bounds");
    }

    add(data: number): void {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    compare(firstI: number, secondI: number): boolean {
        if(!this.head) {
            throw new Error("List is empty");
        }

        return this.at(firstI).data > this.at(secondI).data;
    }

    swap(firstI: number, secondI: number): void {
        const firstNode = this.at(firstI);
        const secondNode = this.at(secondI);

        const firstVal = firstNode.data;
        firstNode.data = secondNode.data;
        secondNode.data = firstVal;
    }

    print(): void {
        if(!this.head) return;

        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
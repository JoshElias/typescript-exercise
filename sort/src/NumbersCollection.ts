import { BaseCollection, Sortable } from "./BaseCollection";

export class NumbersCollection extends BaseCollection implements Sortable{
    constructor(public data: number[]) {
        super();
    }

    get length() { return this.data.length; }

    compare(firstIndex: number, secondIndex: number): boolean {
        return this.data[firstIndex] > this.data[secondIndex];
    }

    swap(firstIndex: number, secondIndex: number): void {
        const firstVal = this.data[firstIndex];
        this.data[firstIndex] = this.data[secondIndex];
        this.data[secondIndex] = firstVal;
    }
}
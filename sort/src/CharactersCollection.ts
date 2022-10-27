import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
    private characters: string[];

    constructor(v: string) {
        this.characters = v.split("");
    }

    get string() { return this.characters.join(); }
    set string(v: string) { this.characters = v.split(""); }
    get length() { return this.characters.length; }

    compare(firstI: number, secondI: number): boolean {
        return this.characters[firstI].toLowerCase() > this.characters[secondI].toLowerCase();
    }

    swap(firstI: number, secondI: number): void {
        const firstVal = this.characters[firstI];
        this.characters[firstI] = this.characters[secondI];
        this.characters[secondI] = firstVal;
    }
}
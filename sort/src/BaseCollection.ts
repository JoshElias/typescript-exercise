export interface Sortable {
    length: number;
    compare(firstI: number, secondI: number): boolean;
    swap(firstI: number, secondI: number): void;
}

export abstract class BaseCollection implements Sortable { 
    abstract length: number;
    abstract compare(firstI: number, secondI: number): boolean;
    abstract swap(firstI: number, secondI: number): void;


    sort(): void {
        for(let i=0; i<this.length; i++) {
            for(let j=0; j<this.length-i-1; j++) {
                if(this.compare(j, j+1)) {
                    this.swap(j, j+1)
                }
            }
        }
    }
}
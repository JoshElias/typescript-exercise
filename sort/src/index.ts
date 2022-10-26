class Sorter {
    constructor(public collection: number[]) {}

    sort(): number[] {
        const { length } = this.collection;
        for(let i=0; i<length; i++) {
            for(let j=0; j<length-i-1; j++) {
                if(this.collection[j] > this.collection[j+1]) {
                    const firstVal = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = firstVal;
                }
            }
        }
        return this.collection;
    }
}

let array = [10, 3, -5, 0];
const sorter = new Sorter(array);
array = sorter.sort();
console.log(array);



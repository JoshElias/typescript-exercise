import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

let numbers: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);

let chars: CharactersCollection = new CharactersCollection("Xaayb");
const sorter2 = new Sorter(chars);
sorter2.sort();
console.log(chars.string);
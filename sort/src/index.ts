import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

let numbers: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);

let chars: CharactersCollection = new CharactersCollection("Xaayb");
const sorter2 = new Sorter(chars);
sorter2.sort();
console.log(chars.string);

let linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log(`linklist length: ${linkedList.length}`)

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();

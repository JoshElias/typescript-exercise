import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

let numbers: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

let chars: CharactersCollection = new CharactersCollection("Xaayb");
chars.sort();
console.log(chars.string);

let linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

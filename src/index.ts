import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedListCollection';

//Array of numbers sort implementation
const numbersCollection = new NumbersCollection([500, 1, 0, -2, -500]);
numbersCollection.sort();
console.log(numbersCollection.data);

//String sort implementation
const charactersCollection = new CharactersCollection('awrhhjtjyfdecbg');
charactersCollection.sort();
console.log(charactersCollection.data);

//Linked List sort implementation
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedListCollection_1 = require("./LinkedListCollection");
//Array of numbers sort implementation
var numbersCollection = new NumbersCollection_1.NumbersCollection([500, 1, 0, -2, -500]);
numbersCollection.sort();
console.log(numbersCollection.data);
//String sort implementation
var charactersCollection = new CharactersCollection_1.CharactersCollection('awrhhjtjyfdecbg');
charactersCollection.sort();
console.log(charactersCollection.data);
//Linked List sort implementation
var linkedList = new LinkedListCollection_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

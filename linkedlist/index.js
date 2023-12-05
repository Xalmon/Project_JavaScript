const LinkedList = require("./linkedlist");

let list = new LinkedList();
list.insertAtHead(2);
list.deleteAtHead();
list.insertAtHead(2);
list.insertAtHead(1);

list.printElements();

list.insertAtHead(1);
list.insertAtEnd(3);
list.clear();
list.printElements();

list.insertAtHead(1);
list.insertAtEnd(4);
list.printElements();
list.removeDuplicate();
list.printElements();
console.log(list.size());

list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(3);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(2);
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtHead(1);
list.printElements();
list.removeDuplicate();
list.printElements();
console.log(list.size());

let list1 = new LinkedList();
list1.insertAtEnd(50);
list1.insertAtEnd(10);
list1.insertAtEnd(90);
list1.insertAtEnd(4);
list1.insertAtEnd(16);
list1.removeDuplicate();
list1.confirmNode(10);
list1.printElements();


list.reverseVowels();

let list2 = new LinkedList();
list2.insertAtEnd(42);
list2.insertAtEnd(25);
list2.insertAtEnd(34);
list2.insertAtEnd(3);
list2.insertAtEnd(20);
let n = 3;
list2.ReturnNth(n);
list2.printElements();

list.palindrome();
list.printElements()


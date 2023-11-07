class Node {
    constructor(value) {
        this.value = value;
        this.nextElement = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(value) {
        let newNode = new Node(value);
        newNode.nextElement = this.head;
        this.head = newNode;
    }

    getHead() {
        if (this.head !== null) {
            return this.head.value;
        }
    }
    getLast () {
        if(element === null){
            return this.tail.value;
        }
    }

    deleteAtHead() {
        if (this.head !== null) {
            this.head = this.head.nextElement;
        }
    }

    insertAtEnd(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextElement !== null) {
            current = current.nextElement;
        }

        current.nextElement = newNode;
    }
}

LinkedList.prototype.isEmpty = function () {
    return this.head === null;
};

LinkedList.prototype.printElements = function () {
    let element = this.head;

    while (element !== null) {
        process.stdout.write(`${element.value} -> `);
        element = element.nextElement;
    }
    process.stdout.write('null\n');
};

module.exports = LinkedList;

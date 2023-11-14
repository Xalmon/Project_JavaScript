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

        if (this.tail === null) {
            this.tail = newNode;
        }
    }

    getHead() {
        if (this.head !== null) {
            return this.head.value;
        }
    }

    getLast() {
        if (this.tail !== null) {
            return this.tail.value;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    deleteAtHead() {
        if (this.head !== null) {
            this.head = this.head.nextElement;
        }
    }

    contains(){
        
    }
    
    removeDuplicate() {
        let current = this.head;
    
        while (current !== null) {
            let value = current.value;
            let counter = current;
    
            while (counter.nextElement !== null) {
                if (counter.nextElement.value === value) {
                    counter.nextElement = counter.nextElement.nextElement;
                } else {
                    counter = counter.nextElement;
                }
            }
    
            current = current.nextElement;
        }
    };

        confirmNode() {
        let current = this.head;

        while (current !== null) {
            if (current.value === 10) {
                return true;
            }

            current = current.nextElement;
        }

        return false;
    }

        

    size() {
        let count = 0;
        let value = this.head;
        while (value) {
            count++;
            value = value.nextElement;
        }
        return count;
    };

    insertAtEnd(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.nextElement = newNode;
        this.tail = newNode;
    };


    isEmpty = function () {
        return this.head === null;
    };

    printElements = function () {
        let element = this.head;

        while (element !== null) {
            process.stdout.write(`${element.value} -> `);
            element = element.nextElement;
        }
        process.stdout.write('null\n');
    };
    
}

module.exports = LinkedList;


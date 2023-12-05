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

    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.nextElement;
            current.nextElement = prev;
            prev = current;
            current = next;
        }

        return prev;
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
};

reverseVowels() {
    let prev = null;
    let current = "a, e, i, o, u";

    while (current !== null) {
        let next = current.nextElement;
        current.nextElement = prev;
        prev = current;
        current = next;
    }

    return prev;
}


palindrome() {
    let newList = this.head;
    let oldList = this.head;

    while (oldList !== null && oldList.nextElement !== null) {
        newList = newList.nextElement;
        oldList = oldList.nextElement.nextElement;
    }


    let secondHalf = this.reverseList(newList);


    let firstHalf = this.head;
    while (secondHalf !== null) {
        if (firstHalf.value !== secondHalf.value) {
            return false;
        }
        firstHalf = firstHalf.nextElement;
        secondHalf = secondHalf.nextElement;
    }

    return true;
}

    getNth(position) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === position) {
                return current.value;
            }

            count++;
            current = current.nextElement;
        }

        return null;
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


class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class Linkedlist {

    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value, null) 

        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head;

            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }
    }

    prepend(value) {
        const node = new Node(value, null) 

        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            node.nextNode = current;
            this.head = node;
        }
    }

    size() {
        let current = this.head;
        let number = 0;

        while(current !== null) {
            number += 1;
            current = current.nextNode;
        }

        return number;
    }

    headPoint() {
        if(this.head === null) {
            return console.log("This list is empty");
        } else {
            return this.head;
        }
    }

    tail() {
        if(this.head === null) {
            return console.log("This list is empty") 
        } else {
            let current = this.head;
            
            while(current.nextNode !== null) {
                current = current.nextNode;
            }

            return current;
        }
    }

    at(index) {
        // returns the node at the given index. 
        // if the given index is larger than the its size
        // throw an error 
        if(index > this.size()) {
            return console.error("Given index exceeds the size of the list");
        }
        // if we have the node in given index 
        // we need to traversal to the given index then
        // return the node.
        let current = this.head;

        for(let i = 0; i <= index; i++) {
            if(i === index) {
                return current.value;
            } else {
                current = current.nextNode;
            }
        }
    }

    pop() {
        if(this.head === null) {
            return console.log("This list is empty");
        } else if(this.head !== null && this.head.nextNode === null) {
            this.head = null;
        } else {
            let current = this.head;

            while(current.nextNode.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = null;
        }
    }

    contains(value) {
        let current = this.head;

        while(current !== null) {
            if(current.value === value) {
                return true;
            } else {
                current = current.nextNode;
            }
        }

        return false;
    }

    find(value) {
        // returns true if the passed in value is in the list
        // otherwise returns false
        let current = this.head;
        let number = 0;

        while(current !== null) {
            if(current.value === value) {
                return number;
            } else {
                number += 1;
                current = current.nextNode;
            }
        }

        return null;
    }

    toString() {
        let current = this.head;
        let string = "null";
        let string2 = "";

        while(current.nextNode !== null) {
            string2 += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        string2 += `( ${current.value} ) -> `;
        let result = string2.concat(string);
        return console.log(result);
    }

    insertAt(value, index) {
    // inserts a new node with the provided value at the given index
        if(index > this.size()) {
            console.error("Index exceeds the size of this list.");
        }

        if(index === 0) {
            const node = new Node(value, null);
            
            node.nextNode = this.head;
            this.head = node;
        } else if(index > 0) {
            // traversal to the index
            const node = new Node(value, null);
            let current = this.head;
            
            for(let i = 1; i < index; i++) {
                current = current.nextNode;
            }

            node.nextNode = current.nextNode;
            current.nextNode = node;
        }
    }

    removeAt(index) {
    // removes the node at the given index
        if (index > this.size()) {
            console.error("Index exceeds the size of this list");
        }

        if(index === 0) {
            this.head = this.head.nextNode;
        } else if (index > 0) {
            let current = this.head;

            for(let i = 1; i < index; i++) {
                current = current.nextNode;
            }

            current.nextNode = current.nextNode.nextNode;
        }

    }
}

const list = new Linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.changeAdr("cat");
list.pop();
list.prepend("dolphine");
console.log(list.at(4));
list.toString();
console.log(list.size());
list.headPoint();
list.tail();
console.log(list.find("snake"));
list.insertAt("crab", 3);
list.toString();
list.removeAt(4);
list.toString();


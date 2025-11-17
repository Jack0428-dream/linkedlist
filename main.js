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
            return console.log(this.head.value);
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

            return console.log(current);
        }
    }

    at(index) {
        // returns the node at the given index. 
        // if the given index is larger than the its size
        // throw an error 
        if(index > this.size()) {
            console.error("Given index exceeds the size of the list");
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

        while(current.nextNode !== null) {
            if(current.value === value) {
                return true 
            }

            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        let current = this.head;
        let number = 0;

        while(current.nextNode !== null) {
            number += 1;
            if(current.value === value) {
                return number;
            }
        }

        return console.log("The list doesn't have this value");
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

    // insertAt(value, index) {

    // }

    // removeAt(index) {

    // }

    changeAdr(item) {
        let current = this.head;
        let length = this.size();

        for(let i = 0; i < length; i++) {
            if(current.value === item) {
                current = current.nextNode.nextNode;
                return true;
            } else {
                current = current.nextNode;
            }
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
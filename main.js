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

        while(current.nextNode !== null) {
            current = current.nextNode;
            number += 1;
        }

        return console.log(number);
    }

    head() {
        if(this.head === null) {
            return console.log("This list is empty");
        } else {
            return console.log(this.head);
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
        if(index > this.size()) {
            return console.log("size is shoreter than given index")
        } else {
            let current = this.head;

            for(let i = 0; i <= index; i++) {
                current = current.nextNode;
            }

            return console.log(current);
        }
    }

    pop() {
        if(this.head === null) {
            return console.log("This list is empty");
        } else {
            let current = this.head;

            for(let i = 1; i <= this.size()-1; i++) {
                current = current.nextNode;
            }

            current = null;
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
}

const list = new Linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();
// two classes or two factory
class Linkedlist {

    construct() {
        list = [];
    }

    Node = class {
        constructor(value = null, nextNode = null) {
            this.value = value;
            this.nextNode = nextNode;
        }
    }
    // represent the full list
    // append(value) -> add new node (contain value) to the end of the list
    append(value) {

    }
    // prepend(value) -> add new node (contain value) start of the list 
    prepend(value) {

    }
    // size -> return the total number of node 
    size() {

    }
    // head -> return the first node 
    head() {

    }
    // tail -> return the last node 
    tail() {

    }
    // at(index) -> return the node at the given index
    at(index) {

    }
    // pop -> removes the last element from the list 
    pop() {

    }
    // contains(value) -> returns true if the list has it if not return false
    contains(value) {

    }
    // find(value) -> returns the index of the node if it has value or null
    find(value) {

    }
    // toString -> represents linkedlist objects as strings 
    toString() {

    }
    // print them out and preview them in the console.
    // format : ( value ) -> ( value ) -> ( value ) -> null  
}

// class Node {
//     // containing property
//     // nextNode
//     // set both  as null by default
//     constructor(value = null, nextNode = null) {
//         this.value = value;
//         this.nextNode = nextNode;
//     }
// }
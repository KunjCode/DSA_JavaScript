class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {

        let node = new Node(element);

        let current;


        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {

            let node = new Node(element);
            let curr, prev;

            curr = this.head;


            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }

    
    removeElement(element) {
        let current = this.head;
        let prev = null;

        // iterate over the list
        while (current != null) {
            
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    // finds the index of element
    indexOf(element) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }


    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

let Lst = new LinkedList();

for(var i = 0; i<=100; i++){
    if(i%10==0){
        Lst.add(i);
    }
}

console.log("Printing 0 to 100 number at difference of 10 numbers: ");

Lst.printList();

console.log("\nInsert 75 on 8th index: ");

Lst.insertAt(75, 8);
Lst.printList();


console.log("\nRemove 30 from 3rd index: ");
console.log("Removed Element: "+Lst.removeFrom(3));
Lst.printList();



/*
    --> This is LinkedList Program.
    --> In this program I Printed 0 to 100 number at difference of 10 numbers
    --> Program inster element 75 on 8th index.
    --> After it, removed 30 from 3rd index.
*/
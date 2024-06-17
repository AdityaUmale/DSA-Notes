class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
}

//insert at start 

DoublyLinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {
        this.head.prev = newNode
    }
    this.head = newNode
    if (this.tail === null) {
        this.tail = newNode
    }
}
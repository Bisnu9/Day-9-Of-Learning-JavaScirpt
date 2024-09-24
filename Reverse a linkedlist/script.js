class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function reverse(head){
    let current = head;
    let prev = null;
    let next;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
function printList(node){
    while(node !== null){
        console.log(node.data);
        node = node.next;
    }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

rev = reverse(head);
printList(rev);

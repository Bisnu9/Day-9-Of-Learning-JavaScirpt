//  find a middle node of the linkedList

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function ListLength(head){
    let length = 0;
    while(head){
        length++;
        head = head.next;
    }
    return length;
}
function middle(head){
    let length = ListLength(head);
    let mid = Math.floor(length/2);
    while(mid-- > 0){
        head = head.next
    }
    return head.data;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(middle(head));
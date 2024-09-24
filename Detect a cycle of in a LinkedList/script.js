// detect a cycle of in a linkedlist

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function cycle(head){
    if(!head){
        return false;
    }
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }
    return false;
}
const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log(cycle(head))

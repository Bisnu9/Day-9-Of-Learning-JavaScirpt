// implement a stack in two queue

var Queue1 = [];
var Queue2 = [];

function Push(element) {
  Queue1.push(element);
}

function Pop() {
  if (Queue1.length === 0) {
    return "Cannot pop because stack is empty";
  }
  
  while (Queue1.length > 1) {
    var p = Queue1.shift();
    Queue2.push(p); 
  }

  var poppedElement = Queue1.shift();

  var temp = Queue1;
  Queue1 = Queue2;
  Queue2 = temp;

  return poppedElement;
}

Push('a');
Push('b');
Push('c');
Push('d');
console.log(Pop());
console.log(Pop()); 
console.log(Pop());
console.log(Pop()); 



JS Stack Implementation
========================

A simple demonstration of a Stack data structure written in javascript. Written as a explain what a stack is and how they function -- the tests show the full gamut of functionality.

#### Usage/Test
* `npm install`
* `mocha` to run the tests

```
var Stack = ('stack.js');

var myStack = new Stack();

myStack.isEmpty(); // => true
myStack.push(5);
myStack.peek(); // => 5
myStack.push(1);
myStack.min(); // => 1
myStack.pop();
myStack.peek(); // => 5
myStack.min(); // => 5
```

#### Implementation:
* `push(num)`
  * O(1) 
  * Adds a new integer to the top of the stack
* `pop()`
  * O(1)
  * Removes the top item on the stack
* `peek()`
  * O(1)
  * Returns the top item on the stack
* `min()`
  * O(1)
  * Returns the smallest integer in the stack

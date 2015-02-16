/*
 * Implementation of a stack in JavaScript.
 *
 * Stack: Last in, first out data sctructure.
 *
 * Methods:
 * 	Push(n) adds n to the top of the stack
 * 	Pop() removes the top item on the stack
 * 	Peek() returns the top item on the stack
 * 	Min() returns the minimum item on the stack
 * */
var Stack = function (){
	this.data = new Array(); //stores the data
	this.mins = new Array(); //keeps track of the latest min
}

//Helper function to access the last element in an array
Array.prototype.last = function(){
	return this[this.length - 1];
}

//Helps the caller determine if they have an empty stack
Stack.prototype.isEmpty = function(){
	return (this.data.length === 0);
}

Stack.prototype.push = function(n){
	//Checks if n is a candidate to be a min
	if(this.mins.length === 0 || n <= this.mins.last()){
		//if it is, hang on to it at the top of the min stack
		this.mins.push(n);
	}
	//utiluzes Array.prototype.push()
	this.data.push(n);
	return this
}

Stack.prototype.pop = function(){
	//Before popping it off the stack, check if it was previously a min
	if(this.data.last() === this.mins.last())
		this.mins.pop();
	//Utilizes Array.prototype.pop()
	return this.data.pop();
}

Stack.prototype.peek = function(){
	//Allows the caller to see the top of the stack
	return this.data.last();
}

Stack.prototype.min = function(){
	//Returns the smallest integer in the stack
	return this.mins.last();
}

module.exports = Stack;

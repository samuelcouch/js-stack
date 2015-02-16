/*
 * Implementation of a stack in JavaScript.
 *
 * Stack: Last in, first out data sctructure.
 *
 * Methods:
 * 	sPush(n) adds n to the top of the stack
 * 	sPop() removes the top item on the stack
 * 	sPeek() returns the top item on the stack
 * 	sMin() returns the minimum item on the stack
 * */
var Stack = function (){
	this.data = new Array(); //stores the data
	this.mins = new Array(); //keeps track of the latest min
}

Stack.prototype.push = function(n){
	//Checks if n is a candidate to be a min
	if(this.mins.length === 0 || n <= this.mins[this.mins.length - 1]){
		//if it is, hang on to it at the top of the min stack
		this.mins.push(n);
	}
	//utiluzes Array.prototype.push()
	this.data.push(n);
}

Stack.prototype.pop = function(){
	//Before popping it off the stack, check if it was previously a min
	if(this.data[this.data.length - 1] === this.mins[this.mins.length - 1])
		this.mins.pop();
	//Utilizes Array.prototype.pop()
	this.data.pop();
}

Stack.prototype.peek = function(){
	//Allows the caller to see the top of the stack
	return this.data[this.data.length - 1];
}

Stack.prototype.min = function(){
	//Returns the smallest integer in the stack
	return this.mins[this.mins.length - 1];
}

module.exports = Stack;

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
	if(this.mins.length === 0 || n <= this.mins[this.mins.length - 1]){
		this.mins.push(n);
	}
	this.data.push(n);
}

Stack.prototype.pop = function(){
	if(this.data[this.data.length - 1] === this.mins[this.mins.length - 1])
		this.mins.pop();
	this.data.pop();
}

Stack.prototype.peek = function(){
	return this.data[this.data.length - 1];
}

Stack.prototype.min = function(){
	return this.mins[this.mins.length - 1];
}

module.exports = Stack;

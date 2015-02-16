var assert = require('assert');
var Stack = require('../stack.js');

describe('Stack', function(){
    var s1 = new Stack();

    describe('push and peek', function(){
        it('should push 4 onto the stack, and return 4', function(){
            s1.push(4);
            assert.equal(4, s1.peek());
        });

        it('should push [3, 2, 1, 10] on to the stack', function(){
            s1.push(3);
            s1.push(2);
            s1.push(1);
            s1.push(10);
            assert.equal(10, s1.peek());
        });
    });
    describe('min and pop', function(){
        it('should return 1 as the min', function(){
            assert.equal(1, s1.min());
        });
        it('should pop 1 and 10 off and return 2 as the min', function(){
            s1.pop();
            s1.pop();
            assert.equal(2, s1.min());
        });
    });
});
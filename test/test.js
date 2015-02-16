var assert = require('assert');
var Stack = require('../stack.js');

describe('Stack', function(){
    var s1 = new Stack();

    describe('isEmpty()', function(){
        it('should confirm a stack was created, and it is empty', function(){
            assert.equal(true, s1.isEmpty());
        });
    });

    describe('push', function(){
        it('should push 4 onto the stack', function(){
            assert.deepEqual(s1.push(4), {
                                            data: [4], 
                                            mins: [4] 
            });
        });

        it('should push [3, 2, 1, 10] on to the stack', function(){
            assert.deepEqual(s1.push(3), {
                                            data: [4, 3], 
                                            mins: [4, 3] 
            });
            assert.deepEqual(s1.push(2), {
                                            data: [4, 3, 2], 
                                            mins: [4, 3, 2] 
            });
            assert.deepEqual(s1.push(1), {
                                            data: [4, 3, 2, 1], 
                                            mins: [4, 3, 2, 1] 
            });
            assert.deepEqual(s1.push(10), {
                                            data: [4, 3, 2, 1, 10], 
                                            mins: [4, 3, 2, 1] 
            });
        });
    });

    describe('peek', function(){
        it('should return 10', function(){
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
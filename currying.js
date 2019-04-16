/*
    # Task

    In this challenge, we're going to implement a 'curry' function for 
    an arbitrary number of arguments.

    curryN will take two parameters:

    * fn: The function we want to curry.
    * n: Optional number of arguments to curry. If not supplied, `curryN` 
      should use the fn's arity as the value for `n`.

    ## Conditions

    * Do not use any for/while loops or `Array.prototype.forEach`.
*/

function curryN(fn, n){
    if(!n){
        n = fn.length;
    }
    return function helper(x){
        if(n < 2){
            return fn(x);
        }
        // more than 1 arg, so call curryN on next function
        // by binding it to 'this' with one less arg
        return curryN(fn.bind(this, x), n - 1);
    }
}

module.exports = curryN;

/* Official solution
    function curryN(fn, n) {
      n = n || fn.length
      return function curriedN(arg) {
        if (n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
      }
    }

    module.exports = curryN
*/

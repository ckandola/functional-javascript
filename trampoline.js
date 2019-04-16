/* 
    # Task

    Modify the boilerplate below such that it uses a trampoline to 
    continuously call itself synchronously.

    You can assume that the operation passed to repeat does not take 
    arguments (or they are already bound to the function) and the 
    return value is not important.

    ## Conditions

    * Do not change the implementation of repeat to include any loops
    (you may change it in other ways though).
*/


function repeat(operation, num){
    if(num <= 0){
        return;
    }
    if(num % 2 == 0){
        operation();
    } else {
        return repeat(operation, --num);
    }
}

function trampoline(fn){
    return function(){
        var result = fn.apply(this);
        while(result instanceof Function){
            result = result();
        }
        return result;
    }
}

module.exports = function(operation, num){
    trampoline(operation);
    return repeat(operation, num);
}

/* Official solution
    function repeat(operation, num) {
      return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
    }

    function trampoline(fn) {
      while(fn && typeof fn === 'function') {
        fn = fn()
      }
    }

    module.exports = function(operation, num) {
      trampoline(function() {
        return repeat(operation, num)
      })
    }
*/

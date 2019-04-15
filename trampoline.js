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
    // Modify this
    if(num <= 0){
        return;
    }
    operation();
    return repeat(operation, --num);
}

function trampoline(fn){
    // implement
}

module.exports = function(operation, num){
    // call trampoline
    trampoline(operation);
    return repeat(operation, num);
}
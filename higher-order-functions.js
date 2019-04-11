/*
    A higher order function does at least one of:
        - takes one or more functions as an input
        - outputs a function
    All other functions are first-order functions
*/

function repeat(operation, num){
    if(num > 0){
        operation();
        repeat(operation, num - 1);
    }
}

module.exports = repeat;
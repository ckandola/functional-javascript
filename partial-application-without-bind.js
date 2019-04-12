/* # Task

    Use partial application to create a function that fixes the first 
    argument to console.log.  i.e. Implement a logging function that 
    prepends a namespace string to its output.

    Your implementation should take a namespace String and return a 
    function that prints messages to the console with the namespace 
    prepended.

    You should use Function#apply to implement the partial application.

    Make sure all arguments passed to the returned logging function 
    are printed.

    Print the output to the console directly
*/

var slice = Array.prototype.slice;

function logger(namespace){
    return function(){  // I guess I didn't find it clear that there 
                        // were no parameters to use
        var args = slice.call(arguments);
        console.log.apply(console, [namespace].concat(args));
    }
}

module.exports = logger;

/*
    I won't lie; I had to look this up because I couldn't get apply
    to work. I'm not sure why this solution used 'console' as the 
    first argument in apply. And I didn't understand how the arguments
    were being passed in.
*/

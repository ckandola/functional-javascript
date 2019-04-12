/*
    # Task:

    Write a function duckCount that returns the number of arguments 
    passed to it which have a property 'quack' defined directly on 
    them. Do not match values inherited from prototypes.

    ## Arguments

    * You will be passed 0-20 arguments. Each argument could be of 
      any type with any properties. Some of these items will have 
      a 'quack' property.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any counter/accumulator variables.
  * Do not create any unnecessary functions e.g. helpers.
*/

function duckCount(){
    var args = Array.from(arguments);
    var result = args.filter(function (obj){
         return Object.prototype.hasOwnProperty.call(obj, 'quack');
    });
    return result.length;
}

module.exports = duckCount;

/* Official solution

    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    module.exports = duckCount

*/
/*
    # Task

    Override a specified method of an object with new functionality while
    still maintaining all of the old behaviour.

    Create a spy that keeps track of how many times a function is called.

    ## Conditions

    * Do not use any for/while loops or Array#forEach.
    * Do not create any unnecessary functions e.g. helpers.
*/

module.exports = function Spy(target, method){
    var unchanged;
    if(target.hasOwnProperty(method)){
        unchanged = target[method]; 
            // I didn't know about target[method] notation
            // why can't I use target.method?
        target[method] = function(){
            obj.count++;
            unchanged.apply(this, arguments);
        }
    }
    var obj = {
        count: 0
    };
    return obj;
}
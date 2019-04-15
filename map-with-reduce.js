/* Task
    Use Array#reduce to implement a simple version of Array#map.
*/

module.exports = function arrayMap(arr, fn){
    return arr.reduce(function(accum, current){
        accum.push(fn(current));
        return accum;
    }, []);
}
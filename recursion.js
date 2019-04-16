/* 
    # Task    
    
    Implement a recursive function that returns all of the unique 
    dependencies, and sub-dependencies of a module, sorted 
    alphabetically. Dependencies should be printed as 
    dependency@version e.g. []()'.

    Multiple versions of the same module are allowed, but duplicates 
    modules of the same version should be removed.

    ## Conditions:

  * Do not use any for/while loops.
*/

function getDependencies(tree){
    var arr = [];

    // helper is given a dependencies object
    function helper(dep, givenArr){
        if(dep.hasOwnProperty('dependencies')){
            dep.dependencies.map(function(d){
                givenArr.push(d);
            });
            return helper(dep.dependencies);
        }
    }
    if(tree && tree.hasOwnProperty('dependencies')){
        helper(tree['dependencies'], arr);
    }
    return arr;
}

module.exports = getDependencies;

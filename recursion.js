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
    
    function helper(obj){
        if(obj && obj['dependencies']){
            Object.keys(obj.dependencies).forEach(function (d){
                var val = d + '@' + obj.dependencies[d].version;
                if(arr.indexOf(val) < 0){
                    arr.push(val);
                }
                helper(obj['dependencies'][d]);
            })
        }
    };
    if(tree && tree['dependencies']){
        helper(tree);
    }
    return arr.sort();
}

module.exports = getDependencies;

/* Official Solution
    function getDependencies(mod, result) {
        result = result || []
        var dependencies = mod && mod.dependencies || []
        Object.keys(dependencies).forEach(function(dep) {
            var key = dep + '@' + mod.dependencies[dep].version
            if (result.indexOf(key) === -1) result.push(key)
            getDependencies(mod.dependencies[dep], result)
        })
        return result.sort()
        }

        module.exports = getDependencies
*/

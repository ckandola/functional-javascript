/* Task
    Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
*/

function countWords(inputWords){
    return inputWords.reduce(function(allWords, currentWord){
        if(allWords[currentWord]){
            allWords[currentWord]++;
        } else {
            allWords[currentWord] = 1;
        }
        return allWords;
    }, {}); // I had to look up this bit regarding initializing the
            // accumulator to an empty object
}

module.exports = countWords;
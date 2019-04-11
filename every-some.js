/* Task
    Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

    You only need to check that the ids match.

    Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.
*/

function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(function (user1){
            return goodUsers.some(function (user2){
                return user1.id == user2.id;
            });
        });
    };
}

module.exports = checkUsersValid;
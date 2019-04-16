/*
    This code is broken!

    A Java developer has committed this terrible code to our codebase and 
    didn't test it!

        function loadUsers(userIds, load, done) {
        var users = []
        for (var i = 0; i < userIds.length; i++) {
            users.push(load(userIds[i]))
        }
        return users
        }

        module.exports = loadUsers

    # Task

    Fix this code! The callback should be called with all the users loaded.
    The order of the users should match the order of supplied user ids. 
    Because this function is asynchronous, we do not care about its 
    return value.

    ## Conditions

    * Do not use for/while loops (Array#forEach ok).
    * The order of the results in `done` must be the same as they were 
      specified in `userIds`.
    * Users should be loaded in parallel i.e. the entire job should not 
      take more than 1 second.
    * Do not create any unnecessary functions e.g. helpers.
*/

function loadUsers(userIds, load, done) {
    var ulen = userIds.length;
    var iters = 0;
    var users = [];
    var index = 0;
    userIds.forEach(function (id){
        load(id, function(user){
            users[index++] = user;
            if(iters == ulen){
                return done(users);
            }
            iters++;
        });
    });
    return users
  }

  module.exports = loadUsers;

/* Official Solution
  function loadUsers(userIds, load, done) {
      var completed = 0
      var users = []
      userIds.forEach(function(id, index) {
        load(id, function(user) {
          users[index] = user
          if (++completed === userIds.length) return done(users)
        })
      })
    }

    module.exports = loadUsers
*/

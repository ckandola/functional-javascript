/*
        # Task

    Modify the recursive repeat function provided in the boilerplate, 
    such that it does not block the event loop (i.e. Timers and IO 
    handlers can fire).  This necessarily requires repeat to be 
    asynchronous.

    A timeout is queued to fire after 100 milliseconds, which will 
    print the results of the test and exit the process. repeat should 
    release control of the event loop to allow the timeout to interrupt 
    before all of the operations complete.

    Try to perform as many operations as you can before the timeout fires!
*/

module.exports = function repeat(operation, num){
    if(num <= 0){
        return;
    }
    operation();
    // Every other call ends up running asynchronously
    if(num % 2 == 0){
        setTimeout(function(){
            repeat(operation, num - 1);
        });
    } else {
       return repeat(operation, --num);
    }
}

/* Official Solution
    function repeat(operation, num) {
      if (num <= 0) return

      operation()

      // release control every 10 or so
      // iterations.
      // 10 is arbitrary.
      if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
    }

    module.exports = repeat
*/

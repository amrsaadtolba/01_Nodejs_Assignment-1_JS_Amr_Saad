// =============================================== C. Part3: Bonus (2 Grades) ==================================

//#region
/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

  let counter = init ;

   const increment = () =>{
     counter++;
     console.log(counter)
   }

   const decrement = () => {
     counter--;
      console.log(counter)
   }

   const reset = () => {
     counter = init
     console.log(counter)
   }

    return  {
        increment,
        decrement,
        reset,
    }
};

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
const counter1 = createCounter(5);
counter1.increment(); // 6
counter1.reset(); // 5
counter1.decrement(); // 4


// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
const counter2 = createCounter(0);
counter2.increment(); // 1
counter2.increment(); // 2
counter2.decrement(); // 1
counter2.reset(); // 0
counter2.reset(); // 0
//#endregion


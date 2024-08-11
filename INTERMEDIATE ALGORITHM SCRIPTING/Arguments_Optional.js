/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// check if arguments provided are valid numbers
// if not return undefined
// check if both arguments are provided
// if not return a function

function addTogether() {
  let [first, second] = arguments;
  first = arguments[0];
  second = arguments[1];

  if (typeof first !== 'number') {
    return undefined;
  }

  if (arguments.length > 1) {
    if (typeof second !== 'number') {
      return undefined;
    } else {
      return first + second;
    }
  }

  if (arguments.length === 1) {
    return function(second) {
      if (typeof second !== 'number') {
        return undefined;
      } else {
        return first + second;
      };
    }
  }
}

console.log(addTogether(2,3));
console.log(addTogether(5, undefined));
console.log(addTogether("2", 3));
console.log(addTogether(5));
console.log(addTogether(2)([3]));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));




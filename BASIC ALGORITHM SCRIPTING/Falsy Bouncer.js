/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  let newArray = [];
  for (const elem of arr) {
    if (elem) {
      newArray.push(elem);
    }
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); // Output: [7, "ate", 9]
console.log(bouncer([null, NaN, 1, 2, undefined])); // output: [1, 2]

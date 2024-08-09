/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

// Recursive method
function steamrollArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten the nested array and concatenate with the result
      result = result.concat(steamrollArray(arr[i]));
    } else {
      // Add non-array elements directly to the result
      result.push(arr[i])
    }
  }
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));


// Using flat()
function steamrollArray(arr) {
  return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);

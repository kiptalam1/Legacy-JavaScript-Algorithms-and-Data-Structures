/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr,...args) {
  let newArray = [...new Set([...arr])];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!newArray.includes(args[i][j])) {
        newArray.push(args[i][j])
      }
    }
  }
  
  return newArray
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));



// method 2:

function uniteUnique(arr, ...args) {
  let combined = [...arr, ...args.flat(Infinity)]; // flat combines sub-arrays into a single array of a certain depth (levels)
  return [...new Set(combined)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


// method 3


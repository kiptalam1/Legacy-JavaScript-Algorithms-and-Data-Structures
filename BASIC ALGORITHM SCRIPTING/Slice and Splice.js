/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  // make a shallow copy of arr2 using slice().
  let resultArr = arr2.slice();
  // insert the arr1 into the copy using splice(startIndex(n), number of items to remove(0), items to be added(arr1))
  resultArr.splice(n, 0, ...arr1)
  return resultArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // output: [4,1,2,3,5,6]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // output: [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]

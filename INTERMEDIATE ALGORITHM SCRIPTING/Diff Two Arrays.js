/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// Method 1:
function diffArray(arr1, arr2) {
  
  const combined = arr1.concat(arr2);
// find values that are not on both arrays using filter()
  const newArr = combined.filter(item => 
  !(arr1.includes(item) && arr2.includes(item)));
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));



// Method 2:
function diffArray(arr1, arr2) {
  // Function to find elements unique to one array
  const findUnique = (a, b) => a.filter(item => !b.includes(item));

  // Find unique elements in both arrays
  const uniqueInArr1 = findUnique(arr1, arr2);
  const uniqueInArr2 = findUnique(arr2, arr1);

  // Combine the unique elements
  const newArr = [...uniqueInArr1, ...uniqueInArr2];

  return newArr;
}

// Example usage
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Output: [4]

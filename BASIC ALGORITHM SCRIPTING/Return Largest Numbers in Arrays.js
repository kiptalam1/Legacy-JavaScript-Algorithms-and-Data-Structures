function largestOfFour(arr) {
  // Initialize an empty array variable for the maximum number from each sub-array.
  let maxArr = [];
  // Loop through each sub-array.
  for (let i = 0; i < arr.length; i++) {
    // Initialize and store the largest number from each sub-array.
      let maxNum = Math.max(...arr[i]);
    // Add the large numbers to the maxArr array.
      maxArr.push(maxNum)
  }
  return maxArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


  // Using higher order functions like map() can be concise too.
/*

    function largestNumbersFromSubArrays(arr) {
      return arr.map(subArray => Math.max(...subArray));
    }
    
    console.log(largestNumbersFromSubArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  // Output: [5, 27, 39, 1001]

*/

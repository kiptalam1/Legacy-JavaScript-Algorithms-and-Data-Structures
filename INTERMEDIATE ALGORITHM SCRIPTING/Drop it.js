/*
Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true 
when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    // Iterate over the array to find the index of the first element where func returns true
    let index = 0;
    while (index < arr.length && !func(arr[index])) {
        index++;
    }
   // Return the subarray starting from the first valid index
    return arr.slice(index);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));

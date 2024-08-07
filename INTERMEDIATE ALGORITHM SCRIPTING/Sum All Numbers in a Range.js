/*

Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const [min, max] = arr;
  const range = Array.from({length: max - min + 1}, (_, i) => min + i);
  const sum = range.reduce((acc, curr) => acc + curr, 0)
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));


// Using for loop:

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const [min, max] = arr;
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));

